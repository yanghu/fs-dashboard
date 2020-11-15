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
  publish,
  map,
  throttle,
} from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import * as model from '@data/schema/proto/simdata';
import { SettingsService } from '@modules/settings/service/settings.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private TAG: string = 'DataService';

  private socket$: WebSocketSubject<Uint8Array>;
  private messageSubject$ = new Subject<Observable<Uint8Array>>();

  private realData$: Observable<
    model.flight_panel.SimData
  > = this.messageSubject$.pipe(
    tap((x) => console.log(x)),
    switchAll(),
    catchError((e) => {
      throw e;
    }),
    map((data) => model.flight_panel.SimData.decode(data))
  ) as ConnectableObservable<model.flight_panel.SimData>;

  private dataSwitch = new Subject<Observable<model.flight_panel.SimData>>();

  isConnected: boolean = false;

  // Everytime we call "connect", messageSubject emits a new WebSocketSubject
  // observable.
  // The public `message` use `switchAll` pipe so only the most recent
  // connection is used.

  public readonly message$: ConnectableObservable<
    model.flight_panel.SimData
  > = this.dataSwitch.pipe(switchAll(), publish()) as ConnectableObservable<
    model.flight_panel.SimData
  >;
  // dummy observable.
  private readonly fakeData$: Observable<model.flight_panel.SimData> = interval(
    30
  ).pipe(
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

  constructor(private settingsService: SettingsService) {}

  public start(): void {
    // Activate the obsrevable BEFORE connecting to WS server.
    // Otherwise, the WS connection is missed by "this.messages$".
    this.message$.connect();
    if (!this.settingsService.useFakeBackend) {
      this.dataSwitch.next(this.realData$);
      this.connect();
    } else {
      this.dataSwitch.next(this.fakeData$);
    }
    this.isConnected = true;
  }

  public stop(): void {
    this.close();
    this.isConnected = false;
    this.dataSwitch.next(new Observable<model.flight_panel.SimData>());
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
        catchError((_) => EMPTY)
      );
      console.log('connectd.');
      this.messageSubject$.next(messages);
    } else {
      console.log('Connection already exist');
    }
  }

  private getNewWebSocket() {
    return webSocket<Uint8Array>({
      url: this.settingsService.dataBackend,
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
    this.socket$?.complete();
  }

  handleError(error) {
    console.log(`${this.TAG}: handling error.`);
    console.log(error);
    this.isConnected = false;
    this.close();
  }
} // class DataService
