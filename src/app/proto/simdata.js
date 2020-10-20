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
    
    $root.SimData = (function() {
    
        /**
         * Properties of a SimData.
         * @exports ISimData
         * @interface ISimData
         * @property {string|null} [callSign] SimData callSign
         */
    
        /**
         * Constructs a new SimData.
         * @exports SimData
         * @classdesc Represents a SimData.
         * @implements ISimData
         * @constructor
         * @param {ISimData=} [properties] Properties to set
         */
        function SimData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SimData callSign.
         * @member {string} callSign
         * @memberof SimData
         * @instance
         */
        SimData.prototype.callSign = "";
    
        /**
         * Creates a new SimData instance using the specified properties.
         * @function create
         * @memberof SimData
         * @static
         * @param {ISimData=} [properties] Properties to set
         * @returns {SimData} SimData instance
         */
        SimData.create = function create(properties) {
            return new SimData(properties);
        };
    
        /**
         * Encodes the specified SimData message. Does not implicitly {@link SimData.verify|verify} messages.
         * @function encode
         * @memberof SimData
         * @static
         * @param {ISimData} message SimData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SimData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callSign != null && Object.hasOwnProperty.call(message, "callSign"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.callSign);
            return writer;
        };
    
        /**
         * Encodes the specified SimData message, length delimited. Does not implicitly {@link SimData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SimData
         * @static
         * @param {ISimData} message SimData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SimData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SimData message from the specified reader or buffer.
         * @function decode
         * @memberof SimData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SimData} SimData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SimData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SimData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
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
         * Decodes a SimData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SimData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SimData} SimData
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
         * @memberof SimData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SimData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.callSign != null && message.hasOwnProperty("callSign"))
                if (!$util.isString(message.callSign))
                    return "callSign: string expected";
            return null;
        };
    
        /**
         * Creates a SimData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SimData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SimData} SimData
         */
        SimData.fromObject = function fromObject(object) {
            if (object instanceof $root.SimData)
                return object;
            var message = new $root.SimData();
            if (object.callSign != null)
                message.callSign = String(object.callSign);
            return message;
        };
    
        /**
         * Creates a plain object from a SimData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SimData
         * @static
         * @param {SimData} message SimData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SimData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.callSign = "";
            if (message.callSign != null && message.hasOwnProperty("callSign"))
                object.callSign = message.callSign;
            return object;
        };
    
        /**
         * Converts this SimData to JSON.
         * @function toJSON
         * @memberof SimData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SimData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SimData;
    })();

    return $root;
});
