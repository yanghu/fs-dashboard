import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { catchError, tap, switchAll } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';
export const WS_ENDPOINT = environment.wsEndpoint;


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private socket$: WebSocketSubject<any>;
  private messageSubject$ = new Subject();
  // Everytime we call "connect", messageSubject will emit a new WebSocketSubject observable.
  // The public `message` use `switchAll` pipe so only the most recent connection is used.
  public message$ = this.messageSubject$.pipe(switchAll(), catchError(e => { throw e }));

  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();
      const messages = this.socket$.pipe(
        tap({
          error: error => console.log(error),
        }), catchError(_ => EMPTY));
      this.messageSubject$.next(messages);
    }
  }

  private getNewWebSocket() {
    return webSocket(WS_ENDPOINT);
  }

  sendMessage (msg: any) {
    this.socket$.next(msg);
  }
  close() {
    this.socket$.complete();
  }
}
