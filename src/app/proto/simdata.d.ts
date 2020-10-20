import * as $protobuf from "protobufjs";
export interface ISimData {
    callSign?: (string|null);
}

export class SimData implements ISimData {
    constructor(properties?: ISimData);
    public callSign: string;
    public static create(properties?: ISimData): SimData;
    public static encode(message: ISimData, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ISimData, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SimData;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SimData;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): SimData;
    public static toObject(message: SimData, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}
