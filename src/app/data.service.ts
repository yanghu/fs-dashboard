import { Injectable } from '@angular/core';
import { ConnectableObservable, EMPTY, Observable, Subject } from 'rxjs';
import {
  catchError,
  tap,
  switchAll,
  multicast,
  refCount,
  publish,
  share,
  map,
} from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';
export const WS_ENDPOINT = environment.wsEndpoint;

import * as model from './proto/simdata';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private TAG: string = 'DataService';

  private socket$: WebSocketSubject<Uint8Array>;
  private messageSubject$ = new Subject<Observable<Uint8Array>>();
  private isConnected: boolean = false;

  // Everytime we call "connect", messageSubject emits a new WebSocketSubject
  // observable.
  // The public `message` use `switchAll` pipe so only the most recent
  // connection is used.
  public message$: Observable<
    model.flight_panel.SimData
  > = this.messageSubject$.pipe(
    switchAll(),
    catchError((e) => {
      throw e;
    }),
    map((data) => model.flight_panel.SimData.decode(data)),
    // Need to multicast back to a subject so different components can subscribe
    // to the same subject.
    share()
  );

  public connect(): void {
    if (!this.socket$ || this.socket$.closed || !this.isConnected) {
      console.log('Creating a new connection.');
      this.socket$ = this.getNewWebSocket();
      this.isConnected = true;
      // When piping on this.socket$, it's converted (from a subject) to an
      // observable. We need to multicast it back to a subject later.
      const messages = this.socket$.pipe(
        tap({
          error: (error) => this.handleError(error),
        }),
        // tap(x => console.log("emit a new connection.")),
        catchError((_) => EMPTY)
      );
      this.messageSubject$.next(messages);
      console.log(this.socket$);
    } else {
      console.log('Connection already exist');
      console.log(this.socket$);
    }
  }

  private getNewWebSocket() {
    return webSocket<Uint8Array>({
      url: WS_ENDPOINT,
      deserializer: (e: MessageEvent) => {
        return new Uint8Array(e.data);
      },
      serializer: (value) => value,
      closeObserver: {
        next: () => {
          console.log(`${this.TAG}: connection closed.`);
        },
      },
      binaryType: 'arraybuffer',
    });
  }

  sendMessage(msg: any) {
    this.socket$.next(msg);
  }

  close() {
    this.socket$.complete();
  }

  handleError(error) {
    console.log(`${this.TAG}: handling error.`);
    console.log(error);
    this.isConnected = false;
    this.close();
  }
} // class DataService
