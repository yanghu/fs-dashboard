declare var $: any;
import * as model from '../proto/simdata';

export interface Gauge {
  name: string;
  // Updater takes the gauge as input, and returns the function that updates
  // the gauge. It will be used as the "next" function.
  updater: (any) => (x: model.flight_panel.Instrument) => void;
  // Creates the gauge.
  creator: () => any;
}

export function createGauge(selector: string, type: string, option) {
  return $.flightIndicator(selector, type, option);
}

export const INSTRUMENTS: Gauge[] = [
  // Airspeed
  {
    name: 'Airspeed',
    updater: (gauge) => {
      return (data: model.flight_panel.Instrument) => {
        return gauge.setAirSpeed(data.indicatedAirspeed);
      };
    },
    creator: () => {
      console.log('airspeed creator');
      return createGauge('#airspeed', 'airspeed', {
        showBox: false,
      });
    },
  },
  // Attitude
  {
    name: 'Attitude',
    updater: (gauge) => {
      return (x) => {
        gauge.setPitch(x.pitchAngle);
        gauge.setRoll(x.bankAngle);
      };
    },
    creator: () => {
      console.log('attitude creator');
      return createGauge('#attitude', 'attitude', { showBox: false });
    },
  },
  // Altitude
  {
    name: 'Altimeter',
    updater: (gauge) => {
      return (x: model.flight_panel.Instrument) => {
        gauge.setAltitude(x.indicatedAltitude);
        gauge.setPressure((x.kohlsmanSettingHg * 3386) / 100);
      };
    },
    creator: () => {
      return createGauge('#altimeter', 'altimeter', {
        showBox: false,
        pressure: 1025,
        altitude: 1400,
      });
    },
  },
  // Turn coordinator
  {
    name: 'TurnCoordinator',
    updater: (gauge) => {
      return (x: model.flight_panel.Instrument) => {
        // TODO: add ball support to Turn indicator.
        console.log(x.turnIndicatorRate);
        gauge.setTurn(x.turnIndicatorRate);
      };
    },
    creator: () => {
      return createGauge('#turncoordinator', 'turn_coordinator', {
        showBox: false,
        turn: 10,
      });
    },
  },
  // Heading
  {
    name: 'HeadingIndicator',
    updater: (gauge) => {
      return (x: model.flight_panel.Instrument) => {
        // TODO: Add heading bug support.
        gauge.setHeading(x.headingIndicatorDeg);
      };
    },
    creator: () => {
      return createGauge('#headingindicator', 'heading', {
        showBox: false,
        heading: 50,
      });
    },
  },
  // vertical speed
  {
    name: 'Variometer',
    updater: (gauge) => {
      return (x: model.flight_panel.Instrument) => {
        gauge.setVario(x.verticalSpeed);
      };
    },
    creator: () => {
      return createGauge('#variometer', 'variometer', {
        showBox: false,
        vario: 55,
      });
    },
  },
];
