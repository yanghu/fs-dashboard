import { Injectable } from '@angular/core';
import {
  ConnectableObservable,
  EMPTY,
  interval,
  Observable,
  Subject,
} from 'rxjs';
import {
  catchError,
  tap,
  switchAll,
  multicast,
  refCount,
  publish,
  share,
  map,
  throttle,
  startWith,
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

  public message$: ConnectableObservable<model.flight_panel.SimData>;
  // dummy observable.
  private dummyMessage$ = interval(30).pipe(
    map((x) => {
      let val = Math.sin(x / 20);
      let data = model.flight_panel.SimData.create({
        instruments: {
          indicatedAirspeed: 100 + 100 * val,
          indicatedAltitude: x,
          bankAngle: 30 * val,
          pitchAngle: 30 * val,
          headingIndicatorDeg: x % 360,
          verticalSpeed: 20 * val,
          kohlsmanSettingHg: 29.92 + val,
          turnIndicatorRate: 10 * val,
          turnCoordinatorBall: val,
        },
        navData: {
          hsi_1: { course: 30 + 30 * val },
          hsi_2: { course: 60 + 10 * val },
        },
        avionics: {
          cdi_1: {
            radialError: 50 * val,
          },
          cdi_2: {
            radialError: 50 * val,
          },
        },
      });
      return data;
    })
  );

  constructor() {
    if (environment.useFakeBackend) {
      this.message$ = this.dummyMessage$.pipe(
        publish()
      ) as ConnectableObservable<model.flight_panel.SimData>;
    } else {
      this.message$ = this.messageSubject$.pipe(
        switchAll(),
        catchError((e) => {
          throw e;
        }),
        // throttle((x) => interval(50)),
        map((data) => model.flight_panel.SimData.decode(data)),
        // Need to multicast back to a subject so different components can subscribe
        // to the same subject.
        publish()
      ) as ConnectableObservable<model.flight_panel.SimData>;
    }
  }

  public start(): void {
    if (!environment.useFakeBackend) {
      this.connect();
    }
    this.message$.connect();
  }

  public stop(): void {
    this.close();
  }

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
