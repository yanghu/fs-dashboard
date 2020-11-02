/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.flight_panel = (function() {
    
        /**
         * Namespace flight_panel.
         * @exports flight_panel
         * @namespace
         */
        var flight_panel = {};
    
        flight_panel.SimData = (function() {
    
            /**
             * Properties of a SimData.
             * @memberof flight_panel
             * @interface ISimData
             * @property {flight_panel.IAircraftInfo|null} [aircraftInfo] SimData aircraftInfo
             * @property {flight_panel.IAvionics|null} [avionics] SimData avionics
             * @property {flight_panel.IAircraftMiscSystem|null} [aircraftMiscData] SimData aircraftMiscData
             * @property {flight_panel.IEngineData|null} [engineData] SimData engineData
             * @property {flight_panel.IInstrument|null} [instruments] SimData instruments
             * @property {flight_panel.IAircraftControls|null} [aircraftControls] SimData aircraftControls
             * @property {flight_panel.IGameData|null} [gameData] SimData gameData
             * @property {flight_panel.INavigationSystem|null} [navData] SimData navData
             */
    
            /**
             * Constructs a new SimData.
             * @memberof flight_panel
             * @classdesc Represents a SimData.
             * @implements ISimData
             * @constructor
             * @param {flight_panel.ISimData=} [properties] Properties to set
             */
            function SimData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SimData aircraftInfo.
             * @member {flight_panel.IAircraftInfo|null|undefined} aircraftInfo
             * @memberof flight_panel.SimData
             * @instance
             */
            SimData.prototype.aircraftInfo = null;
    
            /**
             * SimData avionics.
             * @member {flight_panel.IAvionics|null|undefined} avionics
             * @memberof flight_panel.SimData
             * @instance
             */
            SimData.prototype.avionics = null;
    
            /**
             * SimData aircraftMiscData.
             * @member {flight_panel.IAircraftMiscSystem|null|undefined} aircraftMiscData
             * @memberof flight_panel.SimData
             * @instance
             */
            SimData.prototype.aircraftMiscData = null;
    
            /**
             * SimData engineData.
             * @member {flight_panel.IEngineData|null|undefined} engineData
             * @memberof flight_panel.SimData
             * @instance
             */
            SimData.prototype.engineData = null;
    
            /**
             * SimData instruments.
             * @member {flight_panel.IInstrument|null|undefined} instruments
             * @memberof flight_panel.SimData
             * @instance
             */
            SimData.prototype.instruments = null;
    
            /**
             * SimData aircraftControls.
             * @member {flight_panel.IAircraftControls|null|undefined} aircraftControls
             * @memberof flight_panel.SimData
             * @instance
             */
            SimData.prototype.aircraftControls = null;
    
            /**
             * SimData gameData.
             * @member {flight_panel.IGameData|null|undefined} gameData
             * @memberof flight_panel.SimData
             * @instance
             */
            SimData.prototype.gameData = null;
    
            /**
             * SimData navData.
             * @member {flight_panel.INavigationSystem|null|undefined} navData
             * @memberof flight_panel.SimData
             * @instance
             */
            SimData.prototype.navData = null;
    
            /**
             * Creates a new SimData instance using the specified properties.
             * @function create
             * @memberof flight_panel.SimData
             * @static
             * @param {flight_panel.ISimData=} [properties] Properties to set
             * @returns {flight_panel.SimData} SimData instance
             */
            SimData.create = function create(properties) {
                return new SimData(properties);
            };
    
            /**
             * Encodes the specified SimData message. Does not implicitly {@link flight_panel.SimData.verify|verify} messages.
             * @function encode
             * @memberof flight_panel.SimData
             * @static
             * @param {flight_panel.ISimData} message SimData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.aircraftInfo != null && Object.hasOwnProperty.call(message, "aircraftInfo"))
                    $root.flight_panel.AircraftInfo.encode(message.aircraftInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.avionics != null && Object.hasOwnProperty.call(message, "avionics"))
                    $root.flight_panel.Avionics.encode(message.avionics, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.aircraftMiscData != null && Object.hasOwnProperty.call(message, "aircraftMiscData"))
                    $root.flight_panel.AircraftMiscSystem.encode(message.aircraftMiscData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.engineData != null && Object.hasOwnProperty.call(message, "engineData"))
                    $root.flight_panel.EngineData.encode(message.engineData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.instruments != null && Object.hasOwnProperty.call(message, "instruments"))
                    $root.flight_panel.Instrument.encode(message.instruments, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.aircraftControls != null && Object.hasOwnProperty.call(message, "aircraftControls"))
                    $root.flight_panel.AircraftControls.encode(message.aircraftControls, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.gameData != null && Object.hasOwnProperty.call(message, "gameData"))
                    $root.flight_panel.GameData.encode(message.gameData, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.navData != null && Object.hasOwnProperty.call(message, "navData"))
                    $root.flight_panel.NavigationSystem.encode(message.navData, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified SimData message, length delimited. Does not implicitly {@link flight_panel.SimData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flight_panel.SimData
             * @static
             * @param {flight_panel.ISimData} message SimData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SimData message from the specified reader or buffer.
             * @function decode
             * @memberof flight_panel.SimData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flight_panel.SimData} SimData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flight_panel.SimData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.aircraftInfo = $root.flight_panel.AircraftInfo.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.avionics = $root.flight_panel.Avionics.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.aircraftMiscData = $root.flight_panel.AircraftMiscSystem.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.engineData = $root.flight_panel.EngineData.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.instruments = $root.flight_panel.Instrument.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.aircraftControls = $root.flight_panel.AircraftControls.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.gameData = $root.flight_panel.GameData.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.navData = $root.flight_panel.NavigationSystem.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SimData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flight_panel.SimData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flight_panel.SimData} SimData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SimData message.
             * @function verify
             * @memberof flight_panel.SimData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SimData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.aircraftInfo != null && message.hasOwnProperty("aircraftInfo")) {
                    var error = $root.flight_panel.AircraftInfo.verify(message.aircraftInfo);
                    if (error)
                        return "aircraftInfo." + error;
                }
                if (message.avionics != null && message.hasOwnProperty("avionics")) {
                    var error = $root.flight_panel.Avionics.verify(message.avionics);
                    if (error)
                        return "avionics." + error;
                }
                if (message.aircraftMiscData != null && message.hasOwnProperty("aircraftMiscData")) {
                    var error = $root.flight_panel.AircraftMiscSystem.verify(message.aircraftMiscData);
                    if (error)
                        return "aircraftMiscData." + error;
                }
                if (message.engineData != null && message.hasOwnProperty("engineData")) {
                    var error = $root.flight_panel.EngineData.verify(message.engineData);
                    if (error)
                        return "engineData." + error;
                }
                if (message.instruments != null && message.hasOwnProperty("instruments")) {
                    var error = $root.flight_panel.Instrument.verify(message.instruments);
                    if (error)
                        return "instruments." + error;
                }
                if (message.aircraftControls != null && message.hasOwnProperty("aircraftControls")) {
                    var error = $root.flight_panel.AircraftControls.verify(message.aircraftControls);
                    if (error)
                        return "aircraftControls." + error;
                }
                if (message.gameData != null && message.hasOwnProperty("gameData")) {
                    var error = $root.flight_panel.GameData.verify(message.gameData);
                    if (error)
                        return "gameData." + error;
                }
                if (message.navData != null && message.hasOwnProperty("navData")) {
                    var error = $root.flight_panel.NavigationSystem.verify(message.navData);
                    if (error)
                        return "navData." + error;
                }
                return null;
            };
    
            /**
             * Creates a SimData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flight_panel.SimData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flight_panel.SimData} SimData
             */
            SimData.fromObject = function fromObject(object) {
                if (object instanceof $root.flight_panel.SimData)
                    return object;
                var message = new $root.flight_panel.SimData();
                if (object.aircraftInfo != null) {
                    if (typeof object.aircraftInfo !== "object")
                        throw TypeError(".flight_panel.SimData.aircraftInfo: object expected");
                    message.aircraftInfo = $root.flight_panel.AircraftInfo.fromObject(object.aircraftInfo);
                }
                if (object.avionics != null) {
                    if (typeof object.avionics !== "object")
                        throw TypeError(".flight_panel.SimData.avionics: object expected");
                    message.avionics = $root.flight_panel.Avionics.fromObject(object.avionics);
                }
                if (object.aircraftMiscData != null) {
                    if (typeof object.aircraftMiscData !== "object")
                        throw TypeError(".flight_panel.SimData.aircraftMiscData: object expected");
                    message.aircraftMiscData = $root.flight_panel.AircraftMiscSystem.fromObject(object.aircraftMiscData);
                }
                if (object.engineData != null) {
                    if (typeof object.engineData !== "object")
                        throw TypeError(".flight_panel.SimData.engineData: object expected");
                    message.engineData = $root.flight_panel.EngineData.fromObject(object.engineData);
                }
                if (object.instruments != null) {
                    if (typeof object.instruments !== "object")
                        throw TypeError(".flight_panel.SimData.instruments: object expected");
                    message.instruments = $root.flight_panel.Instrument.fromObject(object.instruments);
                }
                if (object.aircraftControls != null) {
                    if (typeof object.aircraftControls !== "object")
                        throw TypeError(".flight_panel.SimData.aircraftControls: object expected");
                    message.aircraftControls = $root.flight_panel.AircraftControls.fromObject(object.aircraftControls);
                }
                if (object.gameData != null) {
                    if (typeof object.gameData !== "object")
                        throw TypeError(".flight_panel.SimData.gameData: object expected");
                    message.gameData = $root.flight_panel.GameData.fromObject(object.gameData);
                }
                if (object.navData != null) {
                    if (typeof object.navData !== "object")
                        throw TypeError(".flight_panel.SimData.navData: object expected");
                    message.navData = $root.flight_panel.NavigationSystem.fromObject(object.navData);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SimData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flight_panel.SimData
             * @static
             * @param {flight_panel.SimData} message SimData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SimData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.aircraftInfo = null;
                    object.avionics = null;
                    object.aircraftMiscData = null;
                    object.engineData = null;
                    object.instruments = null;
                    object.aircraftControls = null;
                    object.gameData = null;
                    object.navData = null;
                }
                if (message.aircraftInfo != null && message.hasOwnProperty("aircraftInfo"))
                    object.aircraftInfo = $root.flight_panel.AircraftInfo.toObject(message.aircraftInfo, options);
                if (message.avionics != null && message.hasOwnProperty("avionics"))
                    object.avionics = $root.flight_panel.Avionics.toObject(message.avionics, options);
                if (message.aircraftMiscData != null && message.hasOwnProperty("aircraftMiscData"))
                    object.aircraftMiscData = $root.flight_panel.AircraftMiscSystem.toObject(message.aircraftMiscData, options);
                if (message.engineData != null && message.hasOwnProperty("engineData"))
                    object.engineData = $root.flight_panel.EngineData.toObject(message.engineData, options);
                if (message.instruments != null && message.hasOwnProperty("instruments"))
                    object.instruments = $root.flight_panel.Instrument.toObject(message.instruments, options);
                if (message.aircraftControls != null && message.hasOwnProperty("aircraftControls"))
                    object.aircraftControls = $root.flight_panel.AircraftControls.toObject(message.aircraftControls, options);
                if (message.gameData != null && message.hasOwnProperty("gameData"))
                    object.gameData = $root.flight_panel.GameData.toObject(message.gameData, options);
                if (message.navData != null && message.hasOwnProperty("navData"))
                    object.navData = $root.flight_panel.NavigationSystem.toObject(message.navData, options);
                return object;
            };
    
            /**
             * Converts this SimData to JSON.
             * @function toJSON
             * @memberof flight_panel.SimData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SimData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SimData;
        })();
    
        flight_panel.AircraftInfo = (function() {
    
            /**
             * Properties of an AircraftInfo.
             * @memberof flight_panel
             * @interface IAircraftInfo
             * @property {string|null} [model] AircraftInfo model
             * @property {string|null} [callSign] AircraftInfo callSign
             */
    
            /**
             * Constructs a new AircraftInfo.
             * @memberof flight_panel
             * @classdesc Represents an AircraftInfo.
             * @implements IAircraftInfo
             * @constructor
             * @param {flight_panel.IAircraftInfo=} [properties] Properties to set
             */
            function AircraftInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AircraftInfo model.
             * @member {string} model
             * @memberof flight_panel.AircraftInfo
             * @instance
             */
            AircraftInfo.prototype.model = "";
    
            /**
             * AircraftInfo callSign.
             * @member {string} callSign
             * @memberof flight_panel.AircraftInfo
             * @instance
             */
            AircraftInfo.prototype.callSign = "";
    
            /**
             * Creates a new AircraftInfo instance using the specified properties.
             * @function create
             * @memberof flight_panel.AircraftInfo
             * @static
             * @param {flight_panel.IAircraftInfo=} [properties] Properties to set
             * @returns {flight_panel.AircraftInfo} AircraftInfo instance
             */
            AircraftInfo.create = function create(properties) {
                return new AircraftInfo(properties);
            };
    
            /**
             * Encodes the specified AircraftInfo message. Does not implicitly {@link flight_panel.AircraftInfo.verify|verify} messages.
             * @function encode
             * @memberof flight_panel.AircraftInfo
             * @static
             * @param {flight_panel.IAircraftInfo} message AircraftInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AircraftInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.model);
                if (message.callSign != null && Object.hasOwnProperty.call(message, "callSign"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.callSign);
                return writer;
            };
    
            /**
             * Encodes the specified AircraftInfo message, length delimited. Does not implicitly {@link flight_panel.AircraftInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flight_panel.AircraftInfo
             * @static
             * @param {flight_panel.IAircraftInfo} message AircraftInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AircraftInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AircraftInfo message from the specified reader or buffer.
             * @function decode
             * @memberof flight_panel.AircraftInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flight_panel.AircraftInfo} AircraftInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AircraftInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flight_panel.AircraftInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.model = reader.string();
                        break;
                    case 2:
                        message.callSign = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AircraftInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flight_panel.AircraftInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flight_panel.AircraftInfo} AircraftInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AircraftInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AircraftInfo message.
             * @function verify
             * @memberof flight_panel.AircraftInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AircraftInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.model != null && message.hasOwnProperty("model"))
                    if (!$util.isString(message.model))
                        return "model: string expected";
                if (message.callSign != null && message.hasOwnProperty("callSign"))
                    if (!$util.isString(message.callSign))
                        return "callSign: string expected";
                return null;
            };
    
            /**
             * Creates an AircraftInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flight_panel.AircraftInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flight_panel.AircraftInfo} AircraftInfo
             */
            AircraftInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.flight_panel.AircraftInfo)
                    return object;
                var message = new $root.flight_panel.AircraftInfo();
                if (object.model != null)
                    message.model = String(object.model);
                if (object.callSign != null)
                    message.callSign = String(object.callSign);
                return message;
            };
    
            /**
             * Creates a plain object from an AircraftInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flight_panel.AircraftInfo
             * @static
             * @param {flight_panel.AircraftInfo} message AircraftInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AircraftInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.model = "";
                    object.callSign = "";
                }
                if (message.model != null && message.hasOwnProperty("model"))
                    object.model = message.model;
                if (message.callSign != null && message.hasOwnProperty("callSign"))
                    object.callSign = message.callSign;
                return object;
            };
    
            /**
             * Converts this AircraftInfo to JSON.
             * @function toJSON
             * @memberof flight_panel.AircraftInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AircraftInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AircraftInfo;
        })();
    
        flight_panel.Avionics = (function() {
    
            /**
             * Properties of an Avionics.
             * @memberof flight_panel
             * @interface IAvionics
             * @property {flight_panel.ICourseDeviationIndicator|null} [cdi_1] Avionics cdi_1
             * @property {flight_panel.ICourseDeviationIndicator|null} [cdi_2] Avionics cdi_2
             * @property {number|null} [adiRadial] Avionics adiRadial
             * @property {flight_panel.IRadioChannel|null} [navRadio_1] Avionics navRadio_1
             * @property {flight_panel.IRadioChannel|null} [navRadio_2] Avionics navRadio_2
             * @property {flight_panel.IRadioChannel|null} [comRadio_1] Avionics comRadio_1
             * @property {flight_panel.IRadioChannel|null} [comRadio_2] Avionics comRadio_2
             * @property {flight_panel.IRadioChannel|null} [adfRadio] Avionics adfRadio
             * @property {string|null} [transponderCode] Avionics transponderCode
             */
    
            /**
             * Constructs a new Avionics.
             * @memberof flight_panel
             * @classdesc Represents an Avionics.
             * @implements IAvionics
             * @constructor
             * @param {flight_panel.IAvionics=} [properties] Properties to set
             */
            function Avionics(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Avionics cdi_1.
             * @member {flight_panel.ICourseDeviationIndicator|null|undefined} cdi_1
             * @memberof flight_panel.Avionics
             * @instance
             */
            Avionics.prototype.cdi_1 = null;
    
            /**
             * Avionics cdi_2.
             * @member {flight_panel.ICourseDeviationIndicator|null|undefined} cdi_2
             * @memberof flight_panel.Avionics
             * @instance
             */
            Avionics.prototype.cdi_2 = null;
    
            /**
             * Avionics adiRadial.
             * @member {number} adiRadial
             * @memberof flight_panel.Avionics
             * @instance
             */
            Avionics.prototype.adiRadial = 0;
    
            /**
             * Avionics navRadio_1.
             * @member {flight_panel.IRadioChannel|null|undefined} navRadio_1
             * @memberof flight_panel.Avionics
             * @instance
             */
            Avionics.prototype.navRadio_1 = null;
    
            /**
             * Avionics navRadio_2.
             * @member {flight_panel.IRadioChannel|null|undefined} navRadio_2
             * @memberof flight_panel.Avionics
             * @instance
             */
            Avionics.prototype.navRadio_2 = null;
    
            /**
             * Avionics comRadio_1.
             * @member {flight_panel.IRadioChannel|null|undefined} comRadio_1
             * @memberof flight_panel.Avionics
             * @instance
             */
            Avionics.prototype.comRadio_1 = null;
    
            /**
             * Avionics comRadio_2.
             * @member {flight_panel.IRadioChannel|null|undefined} comRadio_2
             * @memberof flight_panel.Avionics
             * @instance
             */
            Avionics.prototype.comRadio_2 = null;
    
            /**
             * Avionics adfRadio.
             * @member {flight_panel.IRadioChannel|null|undefined} adfRadio
             * @memberof flight_panel.Avionics
             * @instance
             */
            Avionics.prototype.adfRadio = null;
    
            /**
             * Avionics transponderCode.
             * @member {string} transponderCode
             * @memberof flight_panel.Avionics
             * @instance
             */
            Avionics.prototype.transponderCode = "";
    
            /**
             * Creates a new Avionics instance using the specified properties.
             * @function create
             * @memberof flight_panel.Avionics
             * @static
             * @param {flight_panel.IAvionics=} [properties] Properties to set
             * @returns {flight_panel.Avionics} Avionics instance
             */
            Avionics.create = function create(properties) {
                return new Avionics(properties);
            };
    
            /**
             * Encodes the specified Avionics message. Does not implicitly {@link flight_panel.Avionics.verify|verify} messages.
             * @function encode
             * @memberof flight_panel.Avionics
             * @static
             * @param {flight_panel.IAvionics} message Avionics message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Avionics.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cdi_1 != null && Object.hasOwnProperty.call(message, "cdi_1"))
                    $root.flight_panel.CourseDeviationIndicator.encode(message.cdi_1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.cdi_2 != null && Object.hasOwnProperty.call(message, "cdi_2"))
                    $root.flight_panel.CourseDeviationIndicator.encode(message.cdi_2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.adiRadial != null && Object.hasOwnProperty.call(message, "adiRadial"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.adiRadial);
                if (message.navRadio_1 != null && Object.hasOwnProperty.call(message, "navRadio_1"))
                    $root.flight_panel.RadioChannel.encode(message.navRadio_1, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.navRadio_2 != null && Object.hasOwnProperty.call(message, "navRadio_2"))
                    $root.flight_panel.RadioChannel.encode(message.navRadio_2, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.comRadio_1 != null && Object.hasOwnProperty.call(message, "comRadio_1"))
                    $root.flight_panel.RadioChannel.encode(message.comRadio_1, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.comRadio_2 != null && Object.hasOwnProperty.call(message, "comRadio_2"))
                    $root.flight_panel.RadioChannel.encode(message.comRadio_2, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.adfRadio != null && Object.hasOwnProperty.call(message, "adfRadio"))
                    $root.flight_panel.RadioChannel.encode(message.adfRadio, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.transponderCode != null && Object.hasOwnProperty.call(message, "transponderCode"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.transponderCode);
                return writer;
            };
    
            /**
             * Encodes the specified Avionics message, length delimited. Does not implicitly {@link flight_panel.Avionics.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flight_panel.Avionics
             * @static
             * @param {flight_panel.IAvionics} message Avionics message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Avionics.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Avionics message from the specified reader or buffer.
             * @function decode
             * @memberof flight_panel.Avionics
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flight_panel.Avionics} Avionics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Avionics.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flight_panel.Avionics();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.cdi_1 = $root.flight_panel.CourseDeviationIndicator.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.cdi_2 = $root.flight_panel.CourseDeviationIndicator.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.adiRadial = reader.double();
                        break;
                    case 4:
                        message.navRadio_1 = $root.flight_panel.RadioChannel.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.navRadio_2 = $root.flight_panel.RadioChannel.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.comRadio_1 = $root.flight_panel.RadioChannel.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.comRadio_2 = $root.flight_panel.RadioChannel.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.adfRadio = $root.flight_panel.RadioChannel.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.transponderCode = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Avionics message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flight_panel.Avionics
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flight_panel.Avionics} Avionics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Avionics.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Avionics message.
             * @function verify
             * @memberof flight_panel.Avionics
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Avionics.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cdi_1 != null && message.hasOwnProperty("cdi_1")) {
                    var error = $root.flight_panel.CourseDeviationIndicator.verify(message.cdi_1);
                    if (error)
                        return "cdi_1." + error;
                }
                if (message.cdi_2 != null && message.hasOwnProperty("cdi_2")) {
                    var error = $root.flight_panel.CourseDeviationIndicator.verify(message.cdi_2);
                    if (error)
                        return "cdi_2." + error;
                }
                if (message.adiRadial != null && message.hasOwnProperty("adiRadial"))
                    if (typeof message.adiRadial !== "number")
                        return "adiRadial: number expected";
                if (message.navRadio_1 != null && message.hasOwnProperty("navRadio_1")) {
                    var error = $root.flight_panel.RadioChannel.verify(message.navRadio_1);
                    if (error)
                        return "navRadio_1." + error;
                }
                if (message.navRadio_2 != null && message.hasOwnProperty("navRadio_2")) {
                    var error = $root.flight_panel.RadioChannel.verify(message.navRadio_2);
                    if (error)
                        return "navRadio_2." + error;
                }
                if (message.comRadio_1 != null && message.hasOwnProperty("comRadio_1")) {
                    var error = $root.flight_panel.RadioChannel.verify(message.comRadio_1);
                    if (error)
                        return "comRadio_1." + error;
                }
                if (message.comRadio_2 != null && message.hasOwnProperty("comRadio_2")) {
                    var error = $root.flight_panel.RadioChannel.verify(message.comRadio_2);
                    if (error)
                        return "comRadio_2." + error;
                }
                if (message.adfRadio != null && message.hasOwnProperty("adfRadio")) {
                    var error = $root.flight_panel.RadioChannel.verify(message.adfRadio);
                    if (error)
                        return "adfRadio." + error;
                }
                if (message.transponderCode != null && message.hasOwnProperty("transponderCode"))
                    if (!$util.isString(message.transponderCode))
                        return "transponderCode: string expected";
                return null;
            };
    
            /**
             * Creates an Avionics message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flight_panel.Avionics
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flight_panel.Avionics} Avionics
             */
            Avionics.fromObject = function fromObject(object) {
                if (object instanceof $root.flight_panel.Avionics)
                    return object;
                var message = new $root.flight_panel.Avionics();
                if (object.cdi_1 != null) {
                    if (typeof object.cdi_1 !== "object")
                        throw TypeError(".flight_panel.Avionics.cdi_1: object expected");
                    message.cdi_1 = $root.flight_panel.CourseDeviationIndicator.fromObject(object.cdi_1);
                }
                if (object.cdi_2 != null) {
                    if (typeof object.cdi_2 !== "object")
                        throw TypeError(".flight_panel.Avionics.cdi_2: object expected");
                    message.cdi_2 = $root.flight_panel.CourseDeviationIndicator.fromObject(object.cdi_2);
                }
                if (object.adiRadial != null)
                    message.adiRadial = Number(object.adiRadial);
                if (object.navRadio_1 != null) {
                    if (typeof object.navRadio_1 !== "object")
                        throw TypeError(".flight_panel.Avionics.navRadio_1: object expected");
                    message.navRadio_1 = $root.flight_panel.RadioChannel.fromObject(object.navRadio_1);
                }
                if (object.navRadio_2 != null) {
                    if (typeof object.navRadio_2 !== "object")
                        throw TypeError(".flight_panel.Avionics.navRadio_2: object expected");
                    message.navRadio_2 = $root.flight_panel.RadioChannel.fromObject(object.navRadio_2);
                }
                if (object.comRadio_1 != null) {
                    if (typeof object.comRadio_1 !== "object")
                        throw TypeError(".flight_panel.Avionics.comRadio_1: object expected");
                    message.comRadio_1 = $root.flight_panel.RadioChannel.fromObject(object.comRadio_1);
                }
                if (object.comRadio_2 != null) {
                    if (typeof object.comRadio_2 !== "object")
                        throw TypeError(".flight_panel.Avionics.comRadio_2: object expected");
                    message.comRadio_2 = $root.flight_panel.RadioChannel.fromObject(object.comRadio_2);
                }
                if (object.adfRadio != null) {
                    if (typeof object.adfRadio !== "object")
                        throw TypeError(".flight_panel.Avionics.adfRadio: object expected");
                    message.adfRadio = $root.flight_panel.RadioChannel.fromObject(object.adfRadio);
                }
                if (object.transponderCode != null)
                    message.transponderCode = String(object.transponderCode);
                return message;
            };
    
            /**
             * Creates a plain object from an Avionics message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flight_panel.Avionics
             * @static
             * @param {flight_panel.Avionics} message Avionics
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Avionics.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.cdi_1 = null;
                    object.cdi_2 = null;
                    object.adiRadial = 0;
                    object.navRadio_1 = null;
                    object.navRadio_2 = null;
                    object.comRadio_1 = null;
                    object.comRadio_2 = null;
                    object.adfRadio = null;
                    object.transponderCode = "";
                }
                if (message.cdi_1 != null && message.hasOwnProperty("cdi_1"))
                    object.cdi_1 = $root.flight_panel.CourseDeviationIndicator.toObject(message.cdi_1, options);
                if (message.cdi_2 != null && message.hasOwnProperty("cdi_2"))
                    object.cdi_2 = $root.flight_panel.CourseDeviationIndicator.toObject(message.cdi_2, options);
                if (message.adiRadial != null && message.hasOwnProperty("adiRadial"))
                    object.adiRadial = options.json && !isFinite(message.adiRadial) ? String(message.adiRadial) : message.adiRadial;
                if (message.navRadio_1 != null && message.hasOwnProperty("navRadio_1"))
                    object.navRadio_1 = $root.flight_panel.RadioChannel.toObject(message.navRadio_1, options);
                if (message.navRadio_2 != null && message.hasOwnProperty("navRadio_2"))
                    object.navRadio_2 = $root.flight_panel.RadioChannel.toObject(message.navRadio_2, options);
                if (message.comRadio_1 != null && message.hasOwnProperty("comRadio_1"))
                    object.comRadio_1 = $root.flight_panel.RadioChannel.toObject(message.comRadio_1, options);
                if (message.comRadio_2 != null && message.hasOwnProperty("comRadio_2"))
                    object.comRadio_2 = $root.flight_panel.RadioChannel.toObject(message.comRadio_2, options);
                if (message.adfRadio != null && message.hasOwnProperty("adfRadio"))
                    object.adfRadio = $root.flight_panel.RadioChannel.toObject(message.adfRadio, options);
                if (message.transponderCode != null && message.hasOwnProperty("transponderCode"))
                    object.transponderCode = message.transponderCode;
                return object;
            };
    
            /**
             * Converts this Avionics to JSON.
             * @function toJSON
             * @memberof flight_panel.Avionics
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Avionics.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Avionics;
        })();
    
        flight_panel.RadioChannel = (function() {
    
            /**
             * Properties of a RadioChannel.
             * @memberof flight_panel
             * @interface IRadioChannel
             * @property {number|null} [activeFreq] RadioChannel activeFreq
             * @property {number|null} [standbyFreq] RadioChannel standbyFreq
             */
    
            /**
             * Constructs a new RadioChannel.
             * @memberof flight_panel
             * @classdesc Represents a RadioChannel.
             * @implements IRadioChannel
             * @constructor
             * @param {flight_panel.IRadioChannel=} [properties] Properties to set
             */
            function RadioChannel(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RadioChannel activeFreq.
             * @member {number} activeFreq
             * @memberof flight_panel.RadioChannel
             * @instance
             */
            RadioChannel.prototype.activeFreq = 0;
    
            /**
             * RadioChannel standbyFreq.
             * @member {number} standbyFreq
             * @memberof flight_panel.RadioChannel
             * @instance
             */
            RadioChannel.prototype.standbyFreq = 0;
    
            /**
             * Creates a new RadioChannel instance using the specified properties.
             * @function create
             * @memberof flight_panel.RadioChannel
             * @static
             * @param {flight_panel.IRadioChannel=} [properties] Properties to set
             * @returns {flight_panel.RadioChannel} RadioChannel instance
             */
            RadioChannel.create = function create(properties) {
                return new RadioChannel(properties);
            };
    
            /**
             * Encodes the specified RadioChannel message. Does not implicitly {@link flight_panel.RadioChannel.verify|verify} messages.
             * @function encode
             * @memberof flight_panel.RadioChannel
             * @static
             * @param {flight_panel.IRadioChannel} message RadioChannel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RadioChannel.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.activeFreq != null && Object.hasOwnProperty.call(message, "activeFreq"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.activeFreq);
                if (message.standbyFreq != null && Object.hasOwnProperty.call(message, "standbyFreq"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.standbyFreq);
                return writer;
            };
    
            /**
             * Encodes the specified RadioChannel message, length delimited. Does not implicitly {@link flight_panel.RadioChannel.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flight_panel.RadioChannel
             * @static
             * @param {flight_panel.IRadioChannel} message RadioChannel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RadioChannel.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RadioChannel message from the specified reader or buffer.
             * @function decode
             * @memberof flight_panel.RadioChannel
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flight_panel.RadioChannel} RadioChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RadioChannel.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flight_panel.RadioChannel();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.activeFreq = reader.double();
                        break;
                    case 2:
                        message.standbyFreq = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RadioChannel message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flight_panel.RadioChannel
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flight_panel.RadioChannel} RadioChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RadioChannel.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RadioChannel message.
             * @function verify
             * @memberof flight_panel.RadioChannel
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RadioChannel.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.activeFreq != null && message.hasOwnProperty("activeFreq"))
                    if (typeof message.activeFreq !== "number")
                        return "activeFreq: number expected";
                if (message.standbyFreq != null && message.hasOwnProperty("standbyFreq"))
                    if (typeof message.standbyFreq !== "number")
                        return "standbyFreq: number expected";
                return null;
            };
    
            /**
             * Creates a RadioChannel message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flight_panel.RadioChannel
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flight_panel.RadioChannel} RadioChannel
             */
            RadioChannel.fromObject = function fromObject(object) {
                if (object instanceof $root.flight_panel.RadioChannel)
                    return object;
                var message = new $root.flight_panel.RadioChannel();
                if (object.activeFreq != null)
                    message.activeFreq = Number(object.activeFreq);
                if (object.standbyFreq != null)
                    message.standbyFreq = Number(object.standbyFreq);
                return message;
            };
    
            /**
             * Creates a plain object from a RadioChannel message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flight_panel.RadioChannel
             * @static
             * @param {flight_panel.RadioChannel} message RadioChannel
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RadioChannel.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.activeFreq = 0;
                    object.standbyFreq = 0;
                }
                if (message.activeFreq != null && message.hasOwnProperty("activeFreq"))
                    object.activeFreq = options.json && !isFinite(message.activeFreq) ? String(message.activeFreq) : message.activeFreq;
                if (message.standbyFreq != null && message.hasOwnProperty("standbyFreq"))
                    object.standbyFreq = options.json && !isFinite(message.standbyFreq) ? String(message.standbyFreq) : message.standbyFreq;
                return object;
            };
    
            /**
             * Converts this RadioChannel to JSON.
             * @function toJSON
             * @memberof flight_panel.RadioChannel
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RadioChannel.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RadioChannel;
        })();
    
        flight_panel.CourseDeviationIndicator = (function() {
    
            /**
             * Properties of a CourseDeviationIndicator.
             * @memberof flight_panel
             * @interface ICourseDeviationIndicator
             * @property {number|null} [obsDeg] CourseDeviationIndicator obsDeg
             * @property {number|null} [radialError] CourseDeviationIndicator radialError
             * @property {number|null} [glideSlopeError] CourseDeviationIndicator glideSlopeError
             * @property {flight_panel.CourseDeviationIndicator.Direction|null} [direction] CourseDeviationIndicator direction
             * @property {boolean|null} [glisdeslopeFlag] CourseDeviationIndicator glisdeslopeFlag
             */
    
            /**
             * Constructs a new CourseDeviationIndicator.
             * @memberof flight_panel
             * @classdesc Represents a CourseDeviationIndicator.
             * @implements ICourseDeviationIndicator
             * @constructor
             * @param {flight_panel.ICourseDeviationIndicator=} [properties] Properties to set
             */
            function CourseDeviationIndicator(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CourseDeviationIndicator obsDeg.
             * @member {number} obsDeg
             * @memberof flight_panel.CourseDeviationIndicator
             * @instance
             */
            CourseDeviationIndicator.prototype.obsDeg = 0;
    
            /**
             * CourseDeviationIndicator radialError.
             * @member {number} radialError
             * @memberof flight_panel.CourseDeviationIndicator
             * @instance
             */
            CourseDeviationIndicator.prototype.radialError = 0;
    
            /**
             * CourseDeviationIndicator glideSlopeError.
             * @member {number} glideSlopeError
             * @memberof flight_panel.CourseDeviationIndicator
             * @instance
             */
            CourseDeviationIndicator.prototype.glideSlopeError = 0;
    
            /**
             * CourseDeviationIndicator direction.
             * @member {flight_panel.CourseDeviationIndicator.Direction} direction
             * @memberof flight_panel.CourseDeviationIndicator
             * @instance
             */
            CourseDeviationIndicator.prototype.direction = 0;
    
            /**
             * CourseDeviationIndicator glisdeslopeFlag.
             * @member {boolean} glisdeslopeFlag
             * @memberof flight_panel.CourseDeviationIndicator
             * @instance
             */
            CourseDeviationIndicator.prototype.glisdeslopeFlag = false;
    
            /**
             * Creates a new CourseDeviationIndicator instance using the specified properties.
             * @function create
             * @memberof flight_panel.CourseDeviationIndicator
             * @static
             * @param {flight_panel.ICourseDeviationIndicator=} [properties] Properties to set
             * @returns {flight_panel.CourseDeviationIndicator} CourseDeviationIndicator instance
             */
            CourseDeviationIndicator.create = function create(properties) {
                return new CourseDeviationIndicator(properties);
            };
    
            /**
             * Encodes the specified CourseDeviationIndicator message. Does not implicitly {@link flight_panel.CourseDeviationIndicator.verify|verify} messages.
             * @function encode
             * @memberof flight_panel.CourseDeviationIndicator
             * @static
             * @param {flight_panel.ICourseDeviationIndicator} message CourseDeviationIndicator message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CourseDeviationIndicator.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.obsDeg != null && Object.hasOwnProperty.call(message, "obsDeg"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.obsDeg);
                if (message.radialError != null && Object.hasOwnProperty.call(message, "radialError"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.radialError);
                if (message.glideSlopeError != null && Object.hasOwnProperty.call(message, "glideSlopeError"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.glideSlopeError);
                if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.direction);
                if (message.glisdeslopeFlag != null && Object.hasOwnProperty.call(message, "glisdeslopeFlag"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.glisdeslopeFlag);
                return writer;
            };
    
            /**
             * Encodes the specified CourseDeviationIndicator message, length delimited. Does not implicitly {@link flight_panel.CourseDeviationIndicator.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flight_panel.CourseDeviationIndicator
             * @static
             * @param {flight_panel.ICourseDeviationIndicator} message CourseDeviationIndicator message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CourseDeviationIndicator.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CourseDeviationIndicator message from the specified reader or buffer.
             * @function decode
             * @memberof flight_panel.CourseDeviationIndicator
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flight_panel.CourseDeviationIndicator} CourseDeviationIndicator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CourseDeviationIndicator.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flight_panel.CourseDeviationIndicator();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.obsDeg = reader.double();
                        break;
                    case 2:
                        message.radialError = reader.double();
                        break;
                    case 3:
                        message.glideSlopeError = reader.double();
                        break;
                    case 4:
                        message.direction = reader.int32();
                        break;
                    case 5:
                        message.glisdeslopeFlag = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CourseDeviationIndicator message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flight_panel.CourseDeviationIndicator
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flight_panel.CourseDeviationIndicator} CourseDeviationIndicator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CourseDeviationIndicator.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CourseDeviationIndicator message.
             * @function verify
             * @memberof flight_panel.CourseDeviationIndicator
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CourseDeviationIndicator.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.obsDeg != null && message.hasOwnProperty("obsDeg"))
                    if (typeof message.obsDeg !== "number")
                        return "obsDeg: number expected";
                if (message.radialError != null && message.hasOwnProperty("radialError"))
                    if (typeof message.radialError !== "number")
                        return "radialError: number expected";
                if (message.glideSlopeError != null && message.hasOwnProperty("glideSlopeError"))
                    if (typeof message.glideSlopeError !== "number")
                        return "glideSlopeError: number expected";
                if (message.direction != null && message.hasOwnProperty("direction"))
                    switch (message.direction) {
                    default:
                        return "direction: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.glisdeslopeFlag != null && message.hasOwnProperty("glisdeslopeFlag"))
                    if (typeof message.glisdeslopeFlag !== "boolean")
                        return "glisdeslopeFlag: boolean expected";
                return null;
            };
    
            /**
             * Creates a CourseDeviationIndicator message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flight_panel.CourseDeviationIndicator
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flight_panel.CourseDeviationIndicator} CourseDeviationIndicator
             */
            CourseDeviationIndicator.fromObject = function fromObject(object) {
                if (object instanceof $root.flight_panel.CourseDeviationIndicator)
                    return object;
                var message = new $root.flight_panel.CourseDeviationIndicator();
                if (object.obsDeg != null)
                    message.obsDeg = Number(object.obsDeg);
                if (object.radialError != null)
                    message.radialError = Number(object.radialError);
                if (object.glideSlopeError != null)
                    message.glideSlopeError = Number(object.glideSlopeError);
                switch (object.direction) {
                case "DIR_UNKNOWN":
                case 0:
                    message.direction = 0;
                    break;
                case "DIR_TO":
                case 1:
                    message.direction = 1;
                    break;
                case "DIR_FROM":
                case 2:
                    message.direction = 2;
                    break;
                }
                if (object.glisdeslopeFlag != null)
                    message.glisdeslopeFlag = Boolean(object.glisdeslopeFlag);
                return message;
            };
    
            /**
             * Creates a plain object from a CourseDeviationIndicator message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flight_panel.CourseDeviationIndicator
             * @static
             * @param {flight_panel.CourseDeviationIndicator} message CourseDeviationIndicator
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CourseDeviationIndicator.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.obsDeg = 0;
                    object.radialError = 0;
                    object.glideSlopeError = 0;
                    object.direction = options.enums === String ? "DIR_UNKNOWN" : 0;
                    object.glisdeslopeFlag = false;
                }
                if (message.obsDeg != null && message.hasOwnProperty("obsDeg"))
                    object.obsDeg = options.json && !isFinite(message.obsDeg) ? String(message.obsDeg) : message.obsDeg;
                if (message.radialError != null && message.hasOwnProperty("radialError"))
                    object.radialError = options.json && !isFinite(message.radialError) ? String(message.radialError) : message.radialError;
                if (message.glideSlopeError != null && message.hasOwnProperty("glideSlopeError"))
                    object.glideSlopeError = options.json && !isFinite(message.glideSlopeError) ? String(message.glideSlopeError) : message.glideSlopeError;
                if (message.direction != null && message.hasOwnProperty("direction"))
                    object.direction = options.enums === String ? $root.flight_panel.CourseDeviationIndicator.Direction[message.direction] : message.direction;
                if (message.glisdeslopeFlag != null && message.hasOwnProperty("glisdeslopeFlag"))
                    object.glisdeslopeFlag = message.glisdeslopeFlag;
                return object;
            };
    
            /**
             * Converts this CourseDeviationIndicator to JSON.
             * @function toJSON
             * @memberof flight_panel.CourseDeviationIndicator
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CourseDeviationIndicator.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Direction enum.
             * @name flight_panel.CourseDeviationIndicator.Direction
             * @enum {number}
             * @property {number} DIR_UNKNOWN=0 DIR_UNKNOWN value
             * @property {number} DIR_TO=1 DIR_TO value
             * @property {number} DIR_FROM=2 DIR_FROM value
             */
            CourseDeviationIndicator.Direction = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DIR_UNKNOWN"] = 0;
                values[valuesById[1] = "DIR_TO"] = 1;
                values[valuesById[2] = "DIR_FROM"] = 2;
                return values;
            })();
    
            return CourseDeviationIndicator;
        })();
    
        flight_panel.AircraftMiscSystem = (function() {
    
            /**
             * Properties of an AircraftMiscSystem.
             * @memberof flight_panel
             * @interface IAircraftMiscSystem
             * @property {number|null} [batteryBusVolt] AircraftMiscSystem batteryBusVolt
             * @property {number|null} [ambientTemp] AircraftMiscSystem ambientTemp
             */
    
            /**
             * Constructs a new AircraftMiscSystem.
             * @memberof flight_panel
             * @classdesc Represents an AircraftMiscSystem.
             * @implements IAircraftMiscSystem
             * @constructor
             * @param {flight_panel.IAircraftMiscSystem=} [properties] Properties to set
             */
            function AircraftMiscSystem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AircraftMiscSystem batteryBusVolt.
             * @member {number} batteryBusVolt
             * @memberof flight_panel.AircraftMiscSystem
             * @instance
             */
            AircraftMiscSystem.prototype.batteryBusVolt = 0;
    
            /**
             * AircraftMiscSystem ambientTemp.
             * @member {number} ambientTemp
             * @memberof flight_panel.AircraftMiscSystem
             * @instance
             */
            AircraftMiscSystem.prototype.ambientTemp = 0;
    
            /**
             * Creates a new AircraftMiscSystem instance using the specified properties.
             * @function create
             * @memberof flight_panel.AircraftMiscSystem
             * @static
             * @param {flight_panel.IAircraftMiscSystem=} [properties] Properties to set
             * @returns {flight_panel.AircraftMiscSystem} AircraftMiscSystem instance
             */
            AircraftMiscSystem.create = function create(properties) {
                return new AircraftMiscSystem(properties);
            };
    
            /**
             * Encodes the specified AircraftMiscSystem message. Does not implicitly {@link flight_panel.AircraftMiscSystem.verify|verify} messages.
             * @function encode
             * @memberof flight_panel.AircraftMiscSystem
             * @static
             * @param {flight_panel.IAircraftMiscSystem} message AircraftMiscSystem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AircraftMiscSystem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.batteryBusVolt != null && Object.hasOwnProperty.call(message, "batteryBusVolt"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.batteryBusVolt);
                if (message.ambientTemp != null && Object.hasOwnProperty.call(message, "ambientTemp"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.ambientTemp);
                return writer;
            };
    
            /**
             * Encodes the specified AircraftMiscSystem message, length delimited. Does not implicitly {@link flight_panel.AircraftMiscSystem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flight_panel.AircraftMiscSystem
             * @static
             * @param {flight_panel.IAircraftMiscSystem} message AircraftMiscSystem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AircraftMiscSystem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AircraftMiscSystem message from the specified reader or buffer.
             * @function decode
             * @memberof flight_panel.AircraftMiscSystem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flight_panel.AircraftMiscSystem} AircraftMiscSystem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AircraftMiscSystem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flight_panel.AircraftMiscSystem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.batteryBusVolt = reader.double();
                        break;
                    case 2:
                        message.ambientTemp = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AircraftMiscSystem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flight_panel.AircraftMiscSystem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flight_panel.AircraftMiscSystem} AircraftMiscSystem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AircraftMiscSystem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AircraftMiscSystem message.
             * @function verify
             * @memberof flight_panel.AircraftMiscSystem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AircraftMiscSystem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.batteryBusVolt != null && message.hasOwnProperty("batteryBusVolt"))
                    if (typeof message.batteryBusVolt !== "number")
                        return "batteryBusVolt: number expected";
                if (message.ambientTemp != null && message.hasOwnProperty("ambientTemp"))
                    if (typeof message.ambientTemp !== "number")
                        return "ambientTemp: number expected";
                return null;
            };
    
            /**
             * Creates an AircraftMiscSystem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flight_panel.AircraftMiscSystem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flight_panel.AircraftMiscSystem} AircraftMiscSystem
             */
            AircraftMiscSystem.fromObject = function fromObject(object) {
                if (object instanceof $root.flight_panel.AircraftMiscSystem)
                    return object;
                var message = new $root.flight_panel.AircraftMiscSystem();
                if (object.batteryBusVolt != null)
                    message.batteryBusVolt = Number(object.batteryBusVolt);
                if (object.ambientTemp != null)
                    message.ambientTemp = Number(object.ambientTemp);
                return message;
            };
    
            /**
             * Creates a plain object from an AircraftMiscSystem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flight_panel.AircraftMiscSystem
             * @static
             * @param {flight_panel.AircraftMiscSystem} message AircraftMiscSystem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AircraftMiscSystem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.batteryBusVolt = 0;
                    object.ambientTemp = 0;
                }
                if (message.batteryBusVolt != null && message.hasOwnProperty("batteryBusVolt"))
                    object.batteryBusVolt = options.json && !isFinite(message.batteryBusVolt) ? String(message.batteryBusVolt) : message.batteryBusVolt;
                if (message.ambientTemp != null && message.hasOwnProperty("ambientTemp"))
                    object.ambientTemp = options.json && !isFinite(message.ambientTemp) ? String(message.ambientTemp) : message.ambientTemp;
                return object;
            };
    
            /**
             * Converts this AircraftMiscSystem to JSON.
             * @function toJSON
             * @memberof flight_panel.AircraftMiscSystem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AircraftMiscSystem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AircraftMiscSystem;
        })();
    
        flight_panel.EngineData = (function() {
    
            /**
             * Properties of an EngineData.
             * @memberof flight_panel
             * @interface IEngineData
             * @property {number|null} [rpm] EngineData rpm
             * @property {number|null} [rpmAmbiemtPct] EngineData rpmAmbiemtPct
             * @property {number|null} [engineElapsedTime] EngineData engineElapsedTime
             * @property {number|null} [fuelLeftLevel] EngineData fuelLeftLevel
             * @property {number|null} [fuelRightLevel] EngineData fuelRightLevel
             */
    
            /**
             * Constructs a new EngineData.
             * @memberof flight_panel
             * @classdesc Represents an EngineData.
             * @implements IEngineData
             * @constructor
             * @param {flight_panel.IEngineData=} [properties] Properties to set
             */
            function EngineData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * EngineData rpm.
             * @member {number} rpm
             * @memberof flight_panel.EngineData
             * @instance
             */
            EngineData.prototype.rpm = 0;
    
            /**
             * EngineData rpmAmbiemtPct.
             * @member {number} rpmAmbiemtPct
             * @memberof flight_panel.EngineData
             * @instance
             */
            EngineData.prototype.rpmAmbiemtPct = 0;
    
            /**
             * EngineData engineElapsedTime.
             * @member {number} engineElapsedTime
             * @memberof flight_panel.EngineData
             * @instance
             */
            EngineData.prototype.engineElapsedTime = 0;
    
            /**
             * EngineData fuelLeftLevel.
             * @member {number} fuelLeftLevel
             * @memberof flight_panel.EngineData
             * @instance
             */
            EngineData.prototype.fuelLeftLevel = 0;
    
            /**
             * EngineData fuelRightLevel.
             * @member {number} fuelRightLevel
             * @memberof flight_panel.EngineData
             * @instance
             */
            EngineData.prototype.fuelRightLevel = 0;
    
            /**
             * Creates a new EngineData instance using the specified properties.
             * @function create
             * @memberof flight_panel.EngineData
             * @static
             * @param {flight_panel.IEngineData=} [properties] Properties to set
             * @returns {flight_panel.EngineData} EngineData instance
             */
            EngineData.create = function create(properties) {
                return new EngineData(properties);
            };
    
            /**
             * Encodes the specified EngineData message. Does not implicitly {@link flight_panel.EngineData.verify|verify} messages.
             * @function encode
             * @memberof flight_panel.EngineData
             * @static
             * @param {flight_panel.IEngineData} message EngineData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EngineData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rpm != null && Object.hasOwnProperty.call(message, "rpm"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.rpm);
                if (message.rpmAmbiemtPct != null && Object.hasOwnProperty.call(message, "rpmAmbiemtPct"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.rpmAmbiemtPct);
                if (message.engineElapsedTime != null && Object.hasOwnProperty.call(message, "engineElapsedTime"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.engineElapsedTime);
                if (message.fuelLeftLevel != null && Object.hasOwnProperty.call(message, "fuelLeftLevel"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.fuelLeftLevel);
                if (message.fuelRightLevel != null && Object.hasOwnProperty.call(message, "fuelRightLevel"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.fuelRightLevel);
                return writer;
            };
    
            /**
             * Encodes the specified EngineData message, length delimited. Does not implicitly {@link flight_panel.EngineData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flight_panel.EngineData
             * @static
             * @param {flight_panel.IEngineData} message EngineData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EngineData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an EngineData message from the specified reader or buffer.
             * @function decode
             * @memberof flight_panel.EngineData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flight_panel.EngineData} EngineData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EngineData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flight_panel.EngineData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.rpm = reader.double();
                        break;
                    case 2:
                        message.rpmAmbiemtPct = reader.double();
                        break;
                    case 3:
                        message.engineElapsedTime = reader.double();
                        break;
                    case 4:
                        message.fuelLeftLevel = reader.double();
                        break;
                    case 5:
                        message.fuelRightLevel = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an EngineData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flight_panel.EngineData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flight_panel.EngineData} EngineData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EngineData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an EngineData message.
             * @function verify
             * @memberof flight_panel.EngineData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EngineData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.rpm != null && message.hasOwnProperty("rpm"))
                    if (typeof message.rpm !== "number")
                        return "rpm: number expected";
                if (message.rpmAmbiemtPct != null && message.hasOwnProperty("rpmAmbiemtPct"))
                    if (typeof message.rpmAmbiemtPct !== "number")
                        return "rpmAmbiemtPct: number expected";
                if (message.engineElapsedTime != null && message.hasOwnProperty("engineElapsedTime"))
                    if (typeof message.engineElapsedTime !== "number")
                        return "engineElapsedTime: number expected";
                if (message.fuelLeftLevel != null && message.hasOwnProperty("fuelLeftLevel"))
                    if (typeof message.fuelLeftLevel !== "number")
                        return "fuelLeftLevel: number expected";
                if (message.fuelRightLevel != null && message.hasOwnProperty("fuelRightLevel"))
                    if (typeof message.fuelRightLevel !== "number")
                        return "fuelRightLevel: number expected";
                return null;
            };
    
            /**
             * Creates an EngineData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flight_panel.EngineData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flight_panel.EngineData} EngineData
             */
            EngineData.fromObject = function fromObject(object) {
                if (object instanceof $root.flight_panel.EngineData)
                    return object;
                var message = new $root.flight_panel.EngineData();
                if (object.rpm != null)
                    message.rpm = Number(object.rpm);
                if (object.rpmAmbiemtPct != null)
                    message.rpmAmbiemtPct = Number(object.rpmAmbiemtPct);
                if (object.engineElapsedTime != null)
                    message.engineElapsedTime = Number(object.engineElapsedTime);
                if (object.fuelLeftLevel != null)
                    message.fuelLeftLevel = Number(object.fuelLeftLevel);
                if (object.fuelRightLevel != null)
                    message.fuelRightLevel = Number(object.fuelRightLevel);
                return message;
            };
    
            /**
             * Creates a plain object from an EngineData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flight_panel.EngineData
             * @static
             * @param {flight_panel.EngineData} message EngineData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EngineData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.rpm = 0;
                    object.rpmAmbiemtPct = 0;
                    object.engineElapsedTime = 0;
                    object.fuelLeftLevel = 0;
                    object.fuelRightLevel = 0;
                }
                if (message.rpm != null && message.hasOwnProperty("rpm"))
                    object.rpm = options.json && !isFinite(message.rpm) ? String(message.rpm) : message.rpm;
                if (message.rpmAmbiemtPct != null && message.hasOwnProperty("rpmAmbiemtPct"))
                    object.rpmAmbiemtPct = options.json && !isFinite(message.rpmAmbiemtPct) ? String(message.rpmAmbiemtPct) : message.rpmAmbiemtPct;
                if (message.engineElapsedTime != null && message.hasOwnProperty("engineElapsedTime"))
                    object.engineElapsedTime = options.json && !isFinite(message.engineElapsedTime) ? String(message.engineElapsedTime) : message.engineElapsedTime;
                if (message.fuelLeftLevel != null && message.hasOwnProperty("fuelLeftLevel"))
                    object.fuelLeftLevel = options.json && !isFinite(message.fuelLeftLevel) ? String(message.fuelLeftLevel) : message.fuelLeftLevel;
                if (message.fuelRightLevel != null && message.hasOwnProperty("fuelRightLevel"))
                    object.fuelRightLevel = options.json && !isFinite(message.fuelRightLevel) ? String(message.fuelRightLevel) : message.fuelRightLevel;
                return object;
            };
    
            /**
             * Converts this EngineData to JSON.
             * @function toJSON
             * @memberof flight_panel.EngineData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EngineData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return EngineData;
        })();
    
        flight_panel.Instrument = (function() {
    
            /**
             * Properties of an Instrument.
             * @memberof flight_panel
             * @interface IInstrument
             * @property {number|null} [indicatedAltitude] Instrument indicatedAltitude
             * @property {number|null} [kohlsmanSettingHg] Instrument kohlsmanSettingHg
             * @property {number|null} [verticalSpeed] Instrument verticalSpeed
             * @property {number|null} [pitchAngle] Instrument pitchAngle
             * @property {number|null} [bankAngle] Instrument bankAngle
             * @property {number|null} [indicatedAirspeed] Instrument indicatedAirspeed
             * @property {number|null} [trueAirspeed] Instrument trueAirspeed
             * @property {number|null} [machSpeed] Instrument machSpeed
             * @property {number|null} [turnIndicatorRate] Instrument turnIndicatorRate
             * @property {number|null} [turnCoordinatorBall] Instrument turnCoordinatorBall
             * @property {number|null} [headingIndicatorDeg] Instrument headingIndicatorDeg
             */
    
            /**
             * Constructs a new Instrument.
             * @memberof flight_panel
             * @classdesc Represents an Instrument.
             * @implements IInstrument
             * @constructor
             * @param {flight_panel.IInstrument=} [properties] Properties to set
             */
            function Instrument(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Instrument indicatedAltitude.
             * @member {number} indicatedAltitude
             * @memberof flight_panel.Instrument
             * @instance
             */
            Instrument.prototype.indicatedAltitude = 0;
    
            /**
             * Instrument kohlsmanSettingHg.
             * @member {number} kohlsmanSettingHg
             * @memberof flight_panel.Instrument
             * @instance
             */
            Instrument.prototype.kohlsmanSettingHg = 0;
    
            /**
             * Instrument verticalSpeed.
             * @member {number} verticalSpeed
             * @memberof flight_panel.Instrument
             * @instance
             */
            Instrument.prototype.verticalSpeed = 0;
    
            /**
             * Instrument pitchAngle.
             * @member {number} pitchAngle
             * @memberof flight_panel.Instrument
             * @instance
             */
            Instrument.prototype.pitchAngle = 0;
    
            /**
             * Instrument bankAngle.
             * @member {number} bankAngle
             * @memberof flight_panel.Instrument
             * @instance
             */
            Instrument.prototype.bankAngle = 0;
    
            /**
             * Instrument indicatedAirspeed.
             * @member {number} indicatedAirspeed
             * @memberof flight_panel.Instrument
             * @instance
             */
            Instrument.prototype.indicatedAirspeed = 0;
    
            /**
             * Instrument trueAirspeed.
             * @member {number} trueAirspeed
             * @memberof flight_panel.Instrument
             * @instance
             */
            Instrument.prototype.trueAirspeed = 0;
    
            /**
             * Instrument machSpeed.
             * @member {number} machSpeed
             * @memberof flight_panel.Instrument
             * @instance
             */
            Instrument.prototype.machSpeed = 0;
    
            /**
             * Instrument turnIndicatorRate.
             * @member {number} turnIndicatorRate
             * @memberof flight_panel.Instrument
             * @instance
             */
            Instrument.prototype.turnIndicatorRate = 0;
    
            /**
             * Instrument turnCoordinatorBall.
             * @member {number} turnCoordinatorBall
             * @memberof flight_panel.Instrument
             * @instance
             */
            Instrument.prototype.turnCoordinatorBall = 0;
    
            /**
             * Instrument headingIndicatorDeg.
             * @member {number} headingIndicatorDeg
             * @memberof flight_panel.Instrument
             * @instance
             */
            Instrument.prototype.headingIndicatorDeg = 0;
    
            /**
             * Creates a new Instrument instance using the specified properties.
             * @function create
             * @memberof flight_panel.Instrument
             * @static
             * @param {flight_panel.IInstrument=} [properties] Properties to set
             * @returns {flight_panel.Instrument} Instrument instance
             */
            Instrument.create = function create(properties) {
                return new Instrument(properties);
            };
    
            /**
             * Encodes the specified Instrument message. Does not implicitly {@link flight_panel.Instrument.verify|verify} messages.
             * @function encode
             * @memberof flight_panel.Instrument
             * @static
             * @param {flight_panel.IInstrument} message Instrument message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Instrument.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.indicatedAltitude != null && Object.hasOwnProperty.call(message, "indicatedAltitude"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.indicatedAltitude);
                if (message.kohlsmanSettingHg != null && Object.hasOwnProperty.call(message, "kohlsmanSettingHg"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.kohlsmanSettingHg);
                if (message.verticalSpeed != null && Object.hasOwnProperty.call(message, "verticalSpeed"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.verticalSpeed);
                if (message.pitchAngle != null && Object.hasOwnProperty.call(message, "pitchAngle"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.pitchAngle);
                if (message.bankAngle != null && Object.hasOwnProperty.call(message, "bankAngle"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.bankAngle);
                if (message.indicatedAirspeed != null && Object.hasOwnProperty.call(message, "indicatedAirspeed"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.indicatedAirspeed);
                if (message.trueAirspeed != null && Object.hasOwnProperty.call(message, "trueAirspeed"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.trueAirspeed);
                if (message.machSpeed != null && Object.hasOwnProperty.call(message, "machSpeed"))
                    writer.uint32(/* id 8, wireType 1 =*/65).double(message.machSpeed);
                if (message.turnIndicatorRate != null && Object.hasOwnProperty.call(message, "turnIndicatorRate"))
                    writer.uint32(/* id 9, wireType 1 =*/73).double(message.turnIndicatorRate);
                if (message.turnCoordinatorBall != null && Object.hasOwnProperty.call(message, "turnCoordinatorBall"))
                    writer.uint32(/* id 10, wireType 1 =*/81).double(message.turnCoordinatorBall);
                if (message.headingIndicatorDeg != null && Object.hasOwnProperty.call(message, "headingIndicatorDeg"))
                    writer.uint32(/* id 11, wireType 1 =*/89).double(message.headingIndicatorDeg);
                return writer;
            };
    
            /**
             * Encodes the specified Instrument message, length delimited. Does not implicitly {@link flight_panel.Instrument.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flight_panel.Instrument
             * @static
             * @param {flight_panel.IInstrument} message Instrument message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Instrument.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Instrument message from the specified reader or buffer.
             * @function decode
             * @memberof flight_panel.Instrument
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flight_panel.Instrument} Instrument
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Instrument.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flight_panel.Instrument();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.indicatedAltitude = reader.double();
                        break;
                    case 2:
                        message.kohlsmanSettingHg = reader.double();
                        break;
                    case 3:
                        message.verticalSpeed = reader.double();
                        break;
                    case 4:
                        message.pitchAngle = reader.double();
                        break;
                    case 5:
                        message.bankAngle = reader.double();
                        break;
                    case 6:
                        message.indicatedAirspeed = reader.double();
                        break;
                    case 7:
                        message.trueAirspeed = reader.double();
                        break;
                    case 8:
                        message.machSpeed = reader.double();
                        break;
                    case 9:
                        message.turnIndicatorRate = reader.double();
                        break;
                    case 10:
                        message.turnCoordinatorBall = reader.double();
                        break;
                    case 11:
                        message.headingIndicatorDeg = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Instrument message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flight_panel.Instrument
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flight_panel.Instrument} Instrument
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Instrument.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Instrument message.
             * @function verify
             * @memberof flight_panel.Instrument
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Instrument.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.indicatedAltitude != null && message.hasOwnProperty("indicatedAltitude"))
                    if (typeof message.indicatedAltitude !== "number")
                        return "indicatedAltitude: number expected";
                if (message.kohlsmanSettingHg != null && message.hasOwnProperty("kohlsmanSettingHg"))
                    if (typeof message.kohlsmanSettingHg !== "number")
                        return "kohlsmanSettingHg: number expected";
                if (message.verticalSpeed != null && message.hasOwnProperty("verticalSpeed"))
                    if (typeof message.verticalSpeed !== "number")
                        return "verticalSpeed: number expected";
                if (message.pitchAngle != null && message.hasOwnProperty("pitchAngle"))
                    if (typeof message.pitchAngle !== "number")
                        return "pitchAngle: number expected";
                if (message.bankAngle != null && message.hasOwnProperty("bankAngle"))
                    if (typeof message.bankAngle !== "number")
                        return "bankAngle: number expected";
                if (message.indicatedAirspeed != null && message.hasOwnProperty("indicatedAirspeed"))
                    if (typeof message.indicatedAirspeed !== "number")
                        return "indicatedAirspeed: number expected";
                if (message.trueAirspeed != null && message.hasOwnProperty("trueAirspeed"))
                    if (typeof message.trueAirspeed !== "number")
                        return "trueAirspeed: number expected";
                if (message.machSpeed != null && message.hasOwnProperty("machSpeed"))
                    if (typeof message.machSpeed !== "number")
                        return "machSpeed: number expected";
                if (message.turnIndicatorRate != null && message.hasOwnProperty("turnIndicatorRate"))
                    if (typeof message.turnIndicatorRate !== "number")
                        return "turnIndicatorRate: number expected";
                if (message.turnCoordinatorBall != null && message.hasOwnProperty("turnCoordinatorBall"))
                    if (typeof message.turnCoordinatorBall !== "number")
                        return "turnCoordinatorBall: number expected";
                if (message.headingIndicatorDeg != null && message.hasOwnProperty("headingIndicatorDeg"))
                    if (typeof message.headingIndicatorDeg !== "number")
                        return "headingIndicatorDeg: number expected";
                return null;
            };
    
            /**
             * Creates an Instrument message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flight_panel.Instrument
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flight_panel.Instrument} Instrument
             */
            Instrument.fromObject = function fromObject(object) {
                if (object instanceof $root.flight_panel.Instrument)
                    return object;
                var message = new $root.flight_panel.Instrument();
                if (object.indicatedAltitude != null)
                    message.indicatedAltitude = Number(object.indicatedAltitude);
                if (object.kohlsmanSettingHg != null)
                    message.kohlsmanSettingHg = Number(object.kohlsmanSettingHg);
                if (object.verticalSpeed != null)
                    message.verticalSpeed = Number(object.verticalSpeed);
                if (object.pitchAngle != null)
                    message.pitchAngle = Number(object.pitchAngle);
                if (object.bankAngle != null)
                    message.bankAngle = Number(object.bankAngle);
                if (object.indicatedAirspeed != null)
                    message.indicatedAirspeed = Number(object.indicatedAirspeed);
                if (object.trueAirspeed != null)
                    message.trueAirspeed = Number(object.trueAirspeed);
                if (object.machSpeed != null)
                    message.machSpeed = Number(object.machSpeed);
                if (object.turnIndicatorRate != null)
                    message.turnIndicatorRate = Number(object.turnIndicatorRate);
                if (object.turnCoordinatorBall != null)
                    message.turnCoordinatorBall = Number(object.turnCoordinatorBall);
                if (object.headingIndicatorDeg != null)
                    message.headingIndicatorDeg = Number(object.headingIndicatorDeg);
                return message;
            };
    
            /**
             * Creates a plain object from an Instrument message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flight_panel.Instrument
             * @static
             * @param {flight_panel.Instrument} message Instrument
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Instrument.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.indicatedAltitude = 0;
                    object.kohlsmanSettingHg = 0;
                    object.verticalSpeed = 0;
                    object.pitchAngle = 0;
                    object.bankAngle = 0;
                    object.indicatedAirspeed = 0;
                    object.trueAirspeed = 0;
                    object.machSpeed = 0;
                    object.turnIndicatorRate = 0;
                    object.turnCoordinatorBall = 0;
                    object.headingIndicatorDeg = 0;
                }
                if (message.indicatedAltitude != null && message.hasOwnProperty("indicatedAltitude"))
                    object.indicatedAltitude = options.json && !isFinite(message.indicatedAltitude) ? String(message.indicatedAltitude) : message.indicatedAltitude;
                if (message.kohlsmanSettingHg != null && message.hasOwnProperty("kohlsmanSettingHg"))
                    object.kohlsmanSettingHg = options.json && !isFinite(message.kohlsmanSettingHg) ? String(message.kohlsmanSettingHg) : message.kohlsmanSettingHg;
                if (message.verticalSpeed != null && message.hasOwnProperty("verticalSpeed"))
                    object.verticalSpeed = options.json && !isFinite(message.verticalSpeed) ? String(message.verticalSpeed) : message.verticalSpeed;
                if (message.pitchAngle != null && message.hasOwnProperty("pitchAngle"))
                    object.pitchAngle = options.json && !isFinite(message.pitchAngle) ? String(message.pitchAngle) : message.pitchAngle;
                if (message.bankAngle != null && message.hasOwnProperty("bankAngle"))
                    object.bankAngle = options.json && !isFinite(message.bankAngle) ? String(message.bankAngle) : message.bankAngle;
                if (message.indicatedAirspeed != null && message.hasOwnProperty("indicatedAirspeed"))
                    object.indicatedAirspeed = options.json && !isFinite(message.indicatedAirspeed) ? String(message.indicatedAirspeed) : message.indicatedAirspeed;
                if (message.trueAirspeed != null && message.hasOwnProperty("trueAirspeed"))
                    object.trueAirspeed = options.json && !isFinite(message.trueAirspeed) ? String(message.trueAirspeed) : message.trueAirspeed;
                if (message.machSpeed != null && message.hasOwnProperty("machSpeed"))
                    object.machSpeed = options.json && !isFinite(message.machSpeed) ? String(message.machSpeed) : message.machSpeed;
                if (message.turnIndicatorRate != null && message.hasOwnProperty("turnIndicatorRate"))
                    object.turnIndicatorRate = options.json && !isFinite(message.turnIndicatorRate) ? String(message.turnIndicatorRate) : message.turnIndicatorRate;
                if (message.turnCoordinatorBall != null && message.hasOwnProperty("turnCoordinatorBall"))
                    object.turnCoordinatorBall = options.json && !isFinite(message.turnCoordinatorBall) ? String(message.turnCoordinatorBall) : message.turnCoordinatorBall;
                if (message.headingIndicatorDeg != null && message.hasOwnProperty("headingIndicatorDeg"))
                    object.headingIndicatorDeg = options.json && !isFinite(message.headingIndicatorDeg) ? String(message.headingIndicatorDeg) : message.headingIndicatorDeg;
                return object;
            };
    
            /**
             * Converts this Instrument to JSON.
             * @function toJSON
             * @memberof flight_panel.Instrument
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Instrument.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Instrument;
        })();
    
        flight_panel.AircraftControls = (function() {
    
            /**
             * Properties of an AircraftControls.
             * @memberof flight_panel
             * @interface IAircraftControls
             * @property {number|null} [elevatorTrimIndicator] AircraftControls elevatorTrimIndicator
             * @property {number|null} [flapsCount] AircraftControls flapsCount
             * @property {number|null} [flapsPos] AircraftControls flapsPos
             */
    
            /**
             * Constructs a new AircraftControls.
             * @memberof flight_panel
             * @classdesc Represents an AircraftControls.
             * @implements IAircraftControls
             * @constructor
             * @param {flight_panel.IAircraftControls=} [properties] Properties to set
             */
            function AircraftControls(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AircraftControls elevatorTrimIndicator.
             * @member {number} elevatorTrimIndicator
             * @memberof flight_panel.AircraftControls
             * @instance
             */
            AircraftControls.prototype.elevatorTrimIndicator = 0;
    
            /**
             * AircraftControls flapsCount.
             * @member {number} flapsCount
             * @memberof flight_panel.AircraftControls
             * @instance
             */
            AircraftControls.prototype.flapsCount = 0;
    
            /**
             * AircraftControls flapsPos.
             * @member {number} flapsPos
             * @memberof flight_panel.AircraftControls
             * @instance
             */
            AircraftControls.prototype.flapsPos = 0;
    
            /**
             * Creates a new AircraftControls instance using the specified properties.
             * @function create
             * @memberof flight_panel.AircraftControls
             * @static
             * @param {flight_panel.IAircraftControls=} [properties] Properties to set
             * @returns {flight_panel.AircraftControls} AircraftControls instance
             */
            AircraftControls.create = function create(properties) {
                return new AircraftControls(properties);
            };
    
            /**
             * Encodes the specified AircraftControls message. Does not implicitly {@link flight_panel.AircraftControls.verify|verify} messages.
             * @function encode
             * @memberof flight_panel.AircraftControls
             * @static
             * @param {flight_panel.IAircraftControls} message AircraftControls message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AircraftControls.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elevatorTrimIndicator != null && Object.hasOwnProperty.call(message, "elevatorTrimIndicator"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.elevatorTrimIndicator);
                if (message.flapsCount != null && Object.hasOwnProperty.call(message, "flapsCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.flapsCount);
                if (message.flapsPos != null && Object.hasOwnProperty.call(message, "flapsPos"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.flapsPos);
                return writer;
            };
    
            /**
             * Encodes the specified AircraftControls message, length delimited. Does not implicitly {@link flight_panel.AircraftControls.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flight_panel.AircraftControls
             * @static
             * @param {flight_panel.IAircraftControls} message AircraftControls message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AircraftControls.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AircraftControls message from the specified reader or buffer.
             * @function decode
             * @memberof flight_panel.AircraftControls
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flight_panel.AircraftControls} AircraftControls
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AircraftControls.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flight_panel.AircraftControls();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.elevatorTrimIndicator = reader.double();
                        break;
                    case 2:
                        message.flapsCount = reader.int32();
                        break;
                    case 3:
                        message.flapsPos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AircraftControls message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flight_panel.AircraftControls
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flight_panel.AircraftControls} AircraftControls
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AircraftControls.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AircraftControls message.
             * @function verify
             * @memberof flight_panel.AircraftControls
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AircraftControls.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elevatorTrimIndicator != null && message.hasOwnProperty("elevatorTrimIndicator"))
                    if (typeof message.elevatorTrimIndicator !== "number")
                        return "elevatorTrimIndicator: number expected";
                if (message.flapsCount != null && message.hasOwnProperty("flapsCount"))
                    if (!$util.isInteger(message.flapsCount))
                        return "flapsCount: integer expected";
                if (message.flapsPos != null && message.hasOwnProperty("flapsPos"))
                    if (!$util.isInteger(message.flapsPos))
                        return "flapsPos: integer expected";
                return null;
            };
    
            /**
             * Creates an AircraftControls message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flight_panel.AircraftControls
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flight_panel.AircraftControls} AircraftControls
             */
            AircraftControls.fromObject = function fromObject(object) {
                if (object instanceof $root.flight_panel.AircraftControls)
                    return object;
                var message = new $root.flight_panel.AircraftControls();
                if (object.elevatorTrimIndicator != null)
                    message.elevatorTrimIndicator = Number(object.elevatorTrimIndicator);
                if (object.flapsCount != null)
                    message.flapsCount = object.flapsCount | 0;
                if (object.flapsPos != null)
                    message.flapsPos = object.flapsPos | 0;
                return message;
            };
    
            /**
             * Creates a plain object from an AircraftControls message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flight_panel.AircraftControls
             * @static
             * @param {flight_panel.AircraftControls} message AircraftControls
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AircraftControls.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.elevatorTrimIndicator = 0;
                    object.flapsCount = 0;
                    object.flapsPos = 0;
                }
                if (message.elevatorTrimIndicator != null && message.hasOwnProperty("elevatorTrimIndicator"))
                    object.elevatorTrimIndicator = options.json && !isFinite(message.elevatorTrimIndicator) ? String(message.elevatorTrimIndicator) : message.elevatorTrimIndicator;
                if (message.flapsCount != null && message.hasOwnProperty("flapsCount"))
                    object.flapsCount = message.flapsCount;
                if (message.flapsPos != null && message.hasOwnProperty("flapsPos"))
                    object.flapsPos = message.flapsPos;
                return object;
            };
    
            /**
             * Converts this AircraftControls to JSON.
             * @function toJSON
             * @memberof flight_panel.AircraftControls
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AircraftControls.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AircraftControls;
        })();
    
        flight_panel.GameData = (function() {
    
            /**
             * Properties of a GameData.
             * @memberof flight_panel
             * @interface IGameData
             * @property {boolean|null} [connected] GameData connected
             */
    
            /**
             * Constructs a new GameData.
             * @memberof flight_panel
             * @classdesc Represents a GameData.
             * @implements IGameData
             * @constructor
             * @param {flight_panel.IGameData=} [properties] Properties to set
             */
            function GameData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameData connected.
             * @member {boolean} connected
             * @memberof flight_panel.GameData
             * @instance
             */
            GameData.prototype.connected = false;
    
            /**
             * Creates a new GameData instance using the specified properties.
             * @function create
             * @memberof flight_panel.GameData
             * @static
             * @param {flight_panel.IGameData=} [properties] Properties to set
             * @returns {flight_panel.GameData} GameData instance
             */
            GameData.create = function create(properties) {
                return new GameData(properties);
            };
    
            /**
             * Encodes the specified GameData message. Does not implicitly {@link flight_panel.GameData.verify|verify} messages.
             * @function encode
             * @memberof flight_panel.GameData
             * @static
             * @param {flight_panel.IGameData} message GameData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.connected != null && Object.hasOwnProperty.call(message, "connected"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.connected);
                return writer;
            };
    
            /**
             * Encodes the specified GameData message, length delimited. Does not implicitly {@link flight_panel.GameData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flight_panel.GameData
             * @static
             * @param {flight_panel.IGameData} message GameData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GameData message from the specified reader or buffer.
             * @function decode
             * @memberof flight_panel.GameData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flight_panel.GameData} GameData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flight_panel.GameData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.connected = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GameData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flight_panel.GameData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flight_panel.GameData} GameData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GameData message.
             * @function verify
             * @memberof flight_panel.GameData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.connected != null && message.hasOwnProperty("connected"))
                    if (typeof message.connected !== "boolean")
                        return "connected: boolean expected";
                return null;
            };
    
            /**
             * Creates a GameData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flight_panel.GameData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flight_panel.GameData} GameData
             */
            GameData.fromObject = function fromObject(object) {
                if (object instanceof $root.flight_panel.GameData)
                    return object;
                var message = new $root.flight_panel.GameData();
                if (object.connected != null)
                    message.connected = Boolean(object.connected);
                return message;
            };
    
            /**
             * Creates a plain object from a GameData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flight_panel.GameData
             * @static
             * @param {flight_panel.GameData} message GameData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.connected = false;
                if (message.connected != null && message.hasOwnProperty("connected"))
                    object.connected = message.connected;
                return object;
            };
    
            /**
             * Converts this GameData to JSON.
             * @function toJSON
             * @memberof flight_panel.GameData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GameData;
        })();
    
        flight_panel.NavigationSystem = (function() {
    
            /**
             * Properties of a NavigationSystem.
             * @memberof flight_panel
             * @interface INavigationSystem
             * @property {flight_panel.NavigationSystem.NavSource|null} [activeNavSource] NavigationSystem activeNavSource
             * @property {flight_panel.IHorizontalSituationIndicator|null} [hsi_1] NavigationSystem hsi_1
             * @property {flight_panel.IHorizontalSituationIndicator|null} [hsi_2] NavigationSystem hsi_2
             * @property {number|null} [nextWaypointDistance] NavigationSystem nextWaypointDistance
             * @property {string|null} [nextWaypointName] NavigationSystem nextWaypointName
             * @property {string|null} [lastWaypointName] NavigationSystem lastWaypointName
             */
    
            /**
             * Constructs a new NavigationSystem.
             * @memberof flight_panel
             * @classdesc Represents a NavigationSystem.
             * @implements INavigationSystem
             * @constructor
             * @param {flight_panel.INavigationSystem=} [properties] Properties to set
             */
            function NavigationSystem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NavigationSystem activeNavSource.
             * @member {flight_panel.NavigationSystem.NavSource} activeNavSource
             * @memberof flight_panel.NavigationSystem
             * @instance
             */
            NavigationSystem.prototype.activeNavSource = 0;
    
            /**
             * NavigationSystem hsi_1.
             * @member {flight_panel.IHorizontalSituationIndicator|null|undefined} hsi_1
             * @memberof flight_panel.NavigationSystem
             * @instance
             */
            NavigationSystem.prototype.hsi_1 = null;
    
            /**
             * NavigationSystem hsi_2.
             * @member {flight_panel.IHorizontalSituationIndicator|null|undefined} hsi_2
             * @memberof flight_panel.NavigationSystem
             * @instance
             */
            NavigationSystem.prototype.hsi_2 = null;
    
            /**
             * NavigationSystem nextWaypointDistance.
             * @member {number} nextWaypointDistance
             * @memberof flight_panel.NavigationSystem
             * @instance
             */
            NavigationSystem.prototype.nextWaypointDistance = 0;
    
            /**
             * NavigationSystem nextWaypointName.
             * @member {string} nextWaypointName
             * @memberof flight_panel.NavigationSystem
             * @instance
             */
            NavigationSystem.prototype.nextWaypointName = "";
    
            /**
             * NavigationSystem lastWaypointName.
             * @member {string} lastWaypointName
             * @memberof flight_panel.NavigationSystem
             * @instance
             */
            NavigationSystem.prototype.lastWaypointName = "";
    
            /**
             * Creates a new NavigationSystem instance using the specified properties.
             * @function create
             * @memberof flight_panel.NavigationSystem
             * @static
             * @param {flight_panel.INavigationSystem=} [properties] Properties to set
             * @returns {flight_panel.NavigationSystem} NavigationSystem instance
             */
            NavigationSystem.create = function create(properties) {
                return new NavigationSystem(properties);
            };
    
            /**
             * Encodes the specified NavigationSystem message. Does not implicitly {@link flight_panel.NavigationSystem.verify|verify} messages.
             * @function encode
             * @memberof flight_panel.NavigationSystem
             * @static
             * @param {flight_panel.INavigationSystem} message NavigationSystem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NavigationSystem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.activeNavSource != null && Object.hasOwnProperty.call(message, "activeNavSource"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.activeNavSource);
                if (message.hsi_1 != null && Object.hasOwnProperty.call(message, "hsi_1"))
                    $root.flight_panel.HorizontalSituationIndicator.encode(message.hsi_1, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.hsi_2 != null && Object.hasOwnProperty.call(message, "hsi_2"))
                    $root.flight_panel.HorizontalSituationIndicator.encode(message.hsi_2, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.nextWaypointDistance != null && Object.hasOwnProperty.call(message, "nextWaypointDistance"))
                    writer.uint32(/* id 19, wireType 1 =*/153).double(message.nextWaypointDistance);
                if (message.nextWaypointName != null && Object.hasOwnProperty.call(message, "nextWaypointName"))
                    writer.uint32(/* id 20, wireType 2 =*/162).string(message.nextWaypointName);
                if (message.lastWaypointName != null && Object.hasOwnProperty.call(message, "lastWaypointName"))
                    writer.uint32(/* id 21, wireType 2 =*/170).string(message.lastWaypointName);
                return writer;
            };
    
            /**
             * Encodes the specified NavigationSystem message, length delimited. Does not implicitly {@link flight_panel.NavigationSystem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flight_panel.NavigationSystem
             * @static
             * @param {flight_panel.INavigationSystem} message NavigationSystem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NavigationSystem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NavigationSystem message from the specified reader or buffer.
             * @function decode
             * @memberof flight_panel.NavigationSystem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flight_panel.NavigationSystem} NavigationSystem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NavigationSystem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flight_panel.NavigationSystem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.activeNavSource = reader.int32();
                        break;
                    case 2:
                        message.hsi_1 = $root.flight_panel.HorizontalSituationIndicator.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.hsi_2 = $root.flight_panel.HorizontalSituationIndicator.decode(reader, reader.uint32());
                        break;
                    case 19:
                        message.nextWaypointDistance = reader.double();
                        break;
                    case 20:
                        message.nextWaypointName = reader.string();
                        break;
                    case 21:
                        message.lastWaypointName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NavigationSystem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flight_panel.NavigationSystem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flight_panel.NavigationSystem} NavigationSystem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NavigationSystem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NavigationSystem message.
             * @function verify
             * @memberof flight_panel.NavigationSystem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NavigationSystem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.activeNavSource != null && message.hasOwnProperty("activeNavSource"))
                    switch (message.activeNavSource) {
                    default:
                        return "activeNavSource: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.hsi_1 != null && message.hasOwnProperty("hsi_1")) {
                    var error = $root.flight_panel.HorizontalSituationIndicator.verify(message.hsi_1);
                    if (error)
                        return "hsi_1." + error;
                }
                if (message.hsi_2 != null && message.hasOwnProperty("hsi_2")) {
                    var error = $root.flight_panel.HorizontalSituationIndicator.verify(message.hsi_2);
                    if (error)
                        return "hsi_2." + error;
                }
                if (message.nextWaypointDistance != null && message.hasOwnProperty("nextWaypointDistance"))
                    if (typeof message.nextWaypointDistance !== "number")
                        return "nextWaypointDistance: number expected";
                if (message.nextWaypointName != null && message.hasOwnProperty("nextWaypointName"))
                    if (!$util.isString(message.nextWaypointName))
                        return "nextWaypointName: string expected";
                if (message.lastWaypointName != null && message.hasOwnProperty("lastWaypointName"))
                    if (!$util.isString(message.lastWaypointName))
                        return "lastWaypointName: string expected";
                return null;
            };
    
            /**
             * Creates a NavigationSystem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flight_panel.NavigationSystem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flight_panel.NavigationSystem} NavigationSystem
             */
            NavigationSystem.fromObject = function fromObject(object) {
                if (object instanceof $root.flight_panel.NavigationSystem)
                    return object;
                var message = new $root.flight_panel.NavigationSystem();
                switch (object.activeNavSource) {
                case "NAV_UNKNOWN":
                case 0:
                    message.activeNavSource = 0;
                    break;
                case "NAV_SOURCE_1":
                case 1:
                    message.activeNavSource = 1;
                    break;
                case "NAV_SOURCE_2":
                case 2:
                    message.activeNavSource = 2;
                    break;
                case "NAV_FMS":
                case 3:
                    message.activeNavSource = 3;
                    break;
                }
                if (object.hsi_1 != null) {
                    if (typeof object.hsi_1 !== "object")
                        throw TypeError(".flight_panel.NavigationSystem.hsi_1: object expected");
                    message.hsi_1 = $root.flight_panel.HorizontalSituationIndicator.fromObject(object.hsi_1);
                }
                if (object.hsi_2 != null) {
                    if (typeof object.hsi_2 !== "object")
                        throw TypeError(".flight_panel.NavigationSystem.hsi_2: object expected");
                    message.hsi_2 = $root.flight_panel.HorizontalSituationIndicator.fromObject(object.hsi_2);
                }
                if (object.nextWaypointDistance != null)
                    message.nextWaypointDistance = Number(object.nextWaypointDistance);
                if (object.nextWaypointName != null)
                    message.nextWaypointName = String(object.nextWaypointName);
                if (object.lastWaypointName != null)
                    message.lastWaypointName = String(object.lastWaypointName);
                return message;
            };
    
            /**
             * Creates a plain object from a NavigationSystem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flight_panel.NavigationSystem
             * @static
             * @param {flight_panel.NavigationSystem} message NavigationSystem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NavigationSystem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.activeNavSource = options.enums === String ? "NAV_UNKNOWN" : 0;
                    object.hsi_1 = null;
                    object.hsi_2 = null;
                    object.nextWaypointDistance = 0;
                    object.nextWaypointName = "";
                    object.lastWaypointName = "";
                }
                if (message.activeNavSource != null && message.hasOwnProperty("activeNavSource"))
                    object.activeNavSource = options.enums === String ? $root.flight_panel.NavigationSystem.NavSource[message.activeNavSource] : message.activeNavSource;
                if (message.hsi_1 != null && message.hasOwnProperty("hsi_1"))
                    object.hsi_1 = $root.flight_panel.HorizontalSituationIndicator.toObject(message.hsi_1, options);
                if (message.hsi_2 != null && message.hasOwnProperty("hsi_2"))
                    object.hsi_2 = $root.flight_panel.HorizontalSituationIndicator.toObject(message.hsi_2, options);
                if (message.nextWaypointDistance != null && message.hasOwnProperty("nextWaypointDistance"))
                    object.nextWaypointDistance = options.json && !isFinite(message.nextWaypointDistance) ? String(message.nextWaypointDistance) : message.nextWaypointDistance;
                if (message.nextWaypointName != null && message.hasOwnProperty("nextWaypointName"))
                    object.nextWaypointName = message.nextWaypointName;
                if (message.lastWaypointName != null && message.hasOwnProperty("lastWaypointName"))
                    object.lastWaypointName = message.lastWaypointName;
                return object;
            };
    
            /**
             * Converts this NavigationSystem to JSON.
             * @function toJSON
             * @memberof flight_panel.NavigationSystem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NavigationSystem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * NavSource enum.
             * @name flight_panel.NavigationSystem.NavSource
             * @enum {number}
             * @property {number} NAV_UNKNOWN=0 NAV_UNKNOWN value
             * @property {number} NAV_SOURCE_1=1 NAV_SOURCE_1 value
             * @property {number} NAV_SOURCE_2=2 NAV_SOURCE_2 value
             * @property {number} NAV_FMS=3 NAV_FMS value
             */
            NavigationSystem.NavSource = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NAV_UNKNOWN"] = 0;
                values[valuesById[1] = "NAV_SOURCE_1"] = 1;
                values[valuesById[2] = "NAV_SOURCE_2"] = 2;
                values[valuesById[3] = "NAV_FMS"] = 3;
                return values;
            })();
    
            return NavigationSystem;
        })();
    
        flight_panel.HorizontalSituationIndicator = (function() {
    
            /**
             * Properties of a HorizontalSituationIndicator.
             * @memberof flight_panel
             * @interface IHorizontalSituationIndicator
             * @property {number|null} [course] HorizontalSituationIndicator course
             */
    
            /**
             * Constructs a new HorizontalSituationIndicator.
             * @memberof flight_panel
             * @classdesc Represents a HorizontalSituationIndicator.
             * @implements IHorizontalSituationIndicator
             * @constructor
             * @param {flight_panel.IHorizontalSituationIndicator=} [properties] Properties to set
             */
            function HorizontalSituationIndicator(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HorizontalSituationIndicator course.
             * @member {number} course
             * @memberof flight_panel.HorizontalSituationIndicator
             * @instance
             */
            HorizontalSituationIndicator.prototype.course = 0;
    
            /**
             * Creates a new HorizontalSituationIndicator instance using the specified properties.
             * @function create
             * @memberof flight_panel.HorizontalSituationIndicator
             * @static
             * @param {flight_panel.IHorizontalSituationIndicator=} [properties] Properties to set
             * @returns {flight_panel.HorizontalSituationIndicator} HorizontalSituationIndicator instance
             */
            HorizontalSituationIndicator.create = function create(properties) {
                return new HorizontalSituationIndicator(properties);
            };
    
            /**
             * Encodes the specified HorizontalSituationIndicator message. Does not implicitly {@link flight_panel.HorizontalSituationIndicator.verify|verify} messages.
             * @function encode
             * @memberof flight_panel.HorizontalSituationIndicator
             * @static
             * @param {flight_panel.IHorizontalSituationIndicator} message HorizontalSituationIndicator message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HorizontalSituationIndicator.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.course != null && Object.hasOwnProperty.call(message, "course"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.course);
                return writer;
            };
    
            /**
             * Encodes the specified HorizontalSituationIndicator message, length delimited. Does not implicitly {@link flight_panel.HorizontalSituationIndicator.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flight_panel.HorizontalSituationIndicator
             * @static
             * @param {flight_panel.IHorizontalSituationIndicator} message HorizontalSituationIndicator message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HorizontalSituationIndicator.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a HorizontalSituationIndicator message from the specified reader or buffer.
             * @function decode
             * @memberof flight_panel.HorizontalSituationIndicator
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flight_panel.HorizontalSituationIndicator} HorizontalSituationIndicator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HorizontalSituationIndicator.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flight_panel.HorizontalSituationIndicator();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.course = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a HorizontalSituationIndicator message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flight_panel.HorizontalSituationIndicator
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flight_panel.HorizontalSituationIndicator} HorizontalSituationIndicator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HorizontalSituationIndicator.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a HorizontalSituationIndicator message.
             * @function verify
             * @memberof flight_panel.HorizontalSituationIndicator
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HorizontalSituationIndicator.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.course != null && message.hasOwnProperty("course"))
                    if (typeof message.course !== "number")
                        return "course: number expected";
                return null;
            };
    
            /**
             * Creates a HorizontalSituationIndicator message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flight_panel.HorizontalSituationIndicator
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flight_panel.HorizontalSituationIndicator} HorizontalSituationIndicator
             */
            HorizontalSituationIndicator.fromObject = function fromObject(object) {
                if (object instanceof $root.flight_panel.HorizontalSituationIndicator)
                    return object;
                var message = new $root.flight_panel.HorizontalSituationIndicator();
                if (object.course != null)
                    message.course = Number(object.course);
                return message;
            };
    
            /**
             * Creates a plain object from a HorizontalSituationIndicator message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flight_panel.HorizontalSituationIndicator
             * @static
             * @param {flight_panel.HorizontalSituationIndicator} message HorizontalSituationIndicator
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HorizontalSituationIndicator.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.course = 0;
                if (message.course != null && message.hasOwnProperty("course"))
                    object.course = options.json && !isFinite(message.course) ? String(message.course) : message.course;
                return object;
            };
    
            /**
             * Converts this HorizontalSituationIndicator to JSON.
             * @function toJSON
             * @memberof flight_panel.HorizontalSituationIndicator
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HorizontalSituationIndicator.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return HorizontalSituationIndicator;
        })();
    
        return flight_panel;
    })();

    return $root;
});
