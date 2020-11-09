import * as $protobuf from "protobufjs";
export namespace flight_panel {

    interface ISimData {
        aircraftInfo?: (flight_panel.IAircraftInfo|null);
        avionics?: (flight_panel.IAvionics|null);
        aircraftMiscData?: (flight_panel.IAircraftMiscSystem|null);
        engineData?: (flight_panel.IEngineData|null);
        instruments?: (flight_panel.IInstrument|null);
        aircraftControls?: (flight_panel.IAircraftControls|null);
        gameData?: (flight_panel.IGameData|null);
        navData?: (flight_panel.INavigationSystem|null);
    }

    class SimData implements ISimData {
        constructor(properties?: flight_panel.ISimData);
        public aircraftInfo?: (flight_panel.IAircraftInfo|null);
        public avionics?: (flight_panel.IAvionics|null);
        public aircraftMiscData?: (flight_panel.IAircraftMiscSystem|null);
        public engineData?: (flight_panel.IEngineData|null);
        public instruments?: (flight_panel.IInstrument|null);
        public aircraftControls?: (flight_panel.IAircraftControls|null);
        public gameData?: (flight_panel.IGameData|null);
        public navData?: (flight_panel.INavigationSystem|null);
        public static create(properties?: flight_panel.ISimData): flight_panel.SimData;
        public static encode(message: flight_panel.ISimData, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: flight_panel.ISimData, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flight_panel.SimData;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flight_panel.SimData;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): flight_panel.SimData;
        public static toObject(message: flight_panel.SimData, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAircraftInfo {
        model?: (string|null);
        callSign?: (string|null);
    }

    class AircraftInfo implements IAircraftInfo {
        constructor(properties?: flight_panel.IAircraftInfo);
        public model: string;
        public callSign: string;
        public static create(properties?: flight_panel.IAircraftInfo): flight_panel.AircraftInfo;
        public static encode(message: flight_panel.IAircraftInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: flight_panel.IAircraftInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flight_panel.AircraftInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flight_panel.AircraftInfo;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): flight_panel.AircraftInfo;
        public static toObject(message: flight_panel.AircraftInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAvionics {
        cdi_1?: (flight_panel.ICourseDeviationIndicator|null);
        cdi_2?: (flight_panel.ICourseDeviationIndicator|null);
        adiRadial?: (number|null);
        navRadio_1?: (flight_panel.IRadioChannel|null);
        navRadio_2?: (flight_panel.IRadioChannel|null);
        comRadio_1?: (flight_panel.IRadioChannel|null);
        comRadio_2?: (flight_panel.IRadioChannel|null);
        adfRadio?: (flight_panel.IRadioChannel|null);
        transponderCode?: (string|null);
    }

    class Avionics implements IAvionics {
        constructor(properties?: flight_panel.IAvionics);
        public cdi_1?: (flight_panel.ICourseDeviationIndicator|null);
        public cdi_2?: (flight_panel.ICourseDeviationIndicator|null);
        public adiRadial: number;
        public navRadio_1?: (flight_panel.IRadioChannel|null);
        public navRadio_2?: (flight_panel.IRadioChannel|null);
        public comRadio_1?: (flight_panel.IRadioChannel|null);
        public comRadio_2?: (flight_panel.IRadioChannel|null);
        public adfRadio?: (flight_panel.IRadioChannel|null);
        public transponderCode: string;
        public static create(properties?: flight_panel.IAvionics): flight_panel.Avionics;
        public static encode(message: flight_panel.IAvionics, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: flight_panel.IAvionics, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flight_panel.Avionics;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flight_panel.Avionics;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): flight_panel.Avionics;
        public static toObject(message: flight_panel.Avionics, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRadioChannel {
        activeFreq?: (number|null);
        standbyFreq?: (number|null);
    }

    class RadioChannel implements IRadioChannel {
        constructor(properties?: flight_panel.IRadioChannel);
        public activeFreq: number;
        public standbyFreq: number;
        public static create(properties?: flight_panel.IRadioChannel): flight_panel.RadioChannel;
        public static encode(message: flight_panel.IRadioChannel, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: flight_panel.IRadioChannel, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flight_panel.RadioChannel;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flight_panel.RadioChannel;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): flight_panel.RadioChannel;
        public static toObject(message: flight_panel.RadioChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICourseDeviationIndicator {
        obsDeg?: (number|null);
        radialError?: (number|null);
        glideSlopeError?: (number|null);
        direction?: (flight_panel.CourseDeviationIndicator.Direction|null);
        glisdeslopeFlag?: (boolean|null);
    }

    class CourseDeviationIndicator implements ICourseDeviationIndicator {
        constructor(properties?: flight_panel.ICourseDeviationIndicator);
        public obsDeg: number;
        public radialError: number;
        public glideSlopeError: number;
        public direction: flight_panel.CourseDeviationIndicator.Direction;
        public glisdeslopeFlag: boolean;
        public static create(properties?: flight_panel.ICourseDeviationIndicator): flight_panel.CourseDeviationIndicator;
        public static encode(message: flight_panel.ICourseDeviationIndicator, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: flight_panel.ICourseDeviationIndicator, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flight_panel.CourseDeviationIndicator;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flight_panel.CourseDeviationIndicator;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): flight_panel.CourseDeviationIndicator;
        public static toObject(message: flight_panel.CourseDeviationIndicator, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace CourseDeviationIndicator {

        enum Direction {
            DIR_UNKNOWN = 0,
            DIR_TO = 1,
            DIR_FROM = 2
        }
    }

    interface IAircraftMiscSystem {
        batteryBusVolt?: (number|null);
        ambientTemp?: (number|null);
    }

    class AircraftMiscSystem implements IAircraftMiscSystem {
        constructor(properties?: flight_panel.IAircraftMiscSystem);
        public batteryBusVolt: number;
        public ambientTemp: number;
        public static create(properties?: flight_panel.IAircraftMiscSystem): flight_panel.AircraftMiscSystem;
        public static encode(message: flight_panel.IAircraftMiscSystem, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: flight_panel.IAircraftMiscSystem, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flight_panel.AircraftMiscSystem;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flight_panel.AircraftMiscSystem;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): flight_panel.AircraftMiscSystem;
        public static toObject(message: flight_panel.AircraftMiscSystem, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IEngineData {
        rpm?: (number|null);
        rpmAmbiemtPct?: (number|null);
        engineElapsedTime?: (number|null);
        fuelLeftLevel?: (number|null);
        fuelRightLevel?: (number|null);
    }

    class EngineData implements IEngineData {
        constructor(properties?: flight_panel.IEngineData);
        public rpm: number;
        public rpmAmbiemtPct: number;
        public engineElapsedTime: number;
        public fuelLeftLevel: number;
        public fuelRightLevel: number;
        public static create(properties?: flight_panel.IEngineData): flight_panel.EngineData;
        public static encode(message: flight_panel.IEngineData, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: flight_panel.IEngineData, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flight_panel.EngineData;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flight_panel.EngineData;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): flight_panel.EngineData;
        public static toObject(message: flight_panel.EngineData, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IInstrument {
        indicatedAltitude?: (number|null);
        kohlsmanSettingHg?: (number|null);
        verticalSpeed?: (number|null);
        pitchAngle?: (number|null);
        bankAngle?: (number|null);
        indicatedAirspeed?: (number|null);
        trueAirspeed?: (number|null);
        machSpeed?: (number|null);
        turnIndicatorRate?: (number|null);
        turnCoordinatorBall?: (number|null);
        headingIndicatorDeg?: (number|null);
    }

    class Instrument implements IInstrument {
        constructor(properties?: flight_panel.IInstrument);
        public indicatedAltitude: number;
        public kohlsmanSettingHg: number;
        public verticalSpeed: number;
        public pitchAngle: number;
        public bankAngle: number;
        public indicatedAirspeed: number;
        public trueAirspeed: number;
        public machSpeed: number;
        public turnIndicatorRate: number;
        public turnCoordinatorBall: number;
        public headingIndicatorDeg: number;
        public static create(properties?: flight_panel.IInstrument): flight_panel.Instrument;
        public static encode(message: flight_panel.IInstrument, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: flight_panel.IInstrument, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flight_panel.Instrument;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flight_panel.Instrument;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): flight_panel.Instrument;
        public static toObject(message: flight_panel.Instrument, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAircraftControls {
        elevatorTrimIndicator?: (number|null);
        flapsCount?: (number|null);
        flapsPos?: (number|null);
    }

    class AircraftControls implements IAircraftControls {
        constructor(properties?: flight_panel.IAircraftControls);
        public elevatorTrimIndicator: number;
        public flapsCount: number;
        public flapsPos: number;
        public static create(properties?: flight_panel.IAircraftControls): flight_panel.AircraftControls;
        public static encode(message: flight_panel.IAircraftControls, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: flight_panel.IAircraftControls, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flight_panel.AircraftControls;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flight_panel.AircraftControls;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): flight_panel.AircraftControls;
        public static toObject(message: flight_panel.AircraftControls, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGameData {
        connected?: (boolean|null);
    }

    class GameData implements IGameData {
        constructor(properties?: flight_panel.IGameData);
        public connected: boolean;
        public static create(properties?: flight_panel.IGameData): flight_panel.GameData;
        public static encode(message: flight_panel.IGameData, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: flight_panel.IGameData, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flight_panel.GameData;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flight_panel.GameData;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): flight_panel.GameData;
        public static toObject(message: flight_panel.GameData, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface INavigationSystem {
        activeNavSource?: (flight_panel.NavigationSystem.NavSource|null);
        hsi_1?: (flight_panel.IHorizontalSituationIndicator|null);
        hsi_2?: (flight_panel.IHorizontalSituationIndicator|null);
        nextWaypointDistance?: (number|null);
        nextWaypointName?: (string|null);
        lastWaypointName?: (string|null);
    }

    class NavigationSystem implements INavigationSystem {
        constructor(properties?: flight_panel.INavigationSystem);
        public activeNavSource: flight_panel.NavigationSystem.NavSource;
        public hsi_1?: (flight_panel.IHorizontalSituationIndicator|null);
        public hsi_2?: (flight_panel.IHorizontalSituationIndicator|null);
        public nextWaypointDistance: number;
        public nextWaypointName: string;
        public lastWaypointName: string;
        public static create(properties?: flight_panel.INavigationSystem): flight_panel.NavigationSystem;
        public static encode(message: flight_panel.INavigationSystem, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: flight_panel.INavigationSystem, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flight_panel.NavigationSystem;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flight_panel.NavigationSystem;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): flight_panel.NavigationSystem;
        public static toObject(message: flight_panel.NavigationSystem, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace NavigationSystem {

        enum NavSource {
            NAV_UNKNOWN = 0,
            NAV_SOURCE_1 = 1,
            NAV_SOURCE_2 = 2,
            NAV_FMS = 3
        }
    }

    interface IHorizontalSituationIndicator {
        course?: (number|null);
    }

    class HorizontalSituationIndicator implements IHorizontalSituationIndicator {
        constructor(properties?: flight_panel.IHorizontalSituationIndicator);
        public course: number;
        public static create(properties?: flight_panel.IHorizontalSituationIndicator): flight_panel.HorizontalSituationIndicator;
        public static encode(message: flight_panel.IHorizontalSituationIndicator, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: flight_panel.IHorizontalSituationIndicator, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flight_panel.HorizontalSituationIndicator;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flight_panel.HorizontalSituationIndicator;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): flight_panel.HorizontalSituationIndicator;
        public static toObject(message: flight_panel.HorizontalSituationIndicator, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}
