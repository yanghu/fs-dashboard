import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, tap, switchAll, multicast, refCount } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';
export const WS_ENDPOINT = environment.wsEndpoint;


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private socket$: WebSocketSubject<string>;
  private messageSubject$ = new Subject<Observable<string>>();

  // The subject for multicast.
  private subject = new Subject<string>();

  // Everytime we call "connect", messageSubject will emit a new WebSocketSubject observable.
  // The public `message` use `switchAll` pipe so only the most recent connection is used.
  public message$ = this.messageSubject$.pipe(
    switchAll(), 
    catchError(e => { throw e }),
    // Need to multicast back to a subject so different components can subscribe to the
    // same subject.
    multicast(this.subject),
    refCount());

  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();
      // When piping on this.socket$, it's converted (from a subject) to an observable.
      // We need to multicast it back to a subject later.
      const messages = this.socket$.pipe(
        tap({
          error: error => console.log(error),
        }), 
        //catchError(_ => EMPTY)
        );
      this.messageSubject$.next(messages);
    }
  }

  private getNewWebSocket() {
    return webSocket<string>(WS_ENDPOINT);
  }

  sendMessage (msg: any) {
    this.socket$.next(msg);
  }
  close() {
    this.socket$.complete();
  }
}
