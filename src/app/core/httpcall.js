"use strict";
exports.__esModule = true;
var Etype;
(function (Etype) {
    Etype[Etype["num"] = 0] = "num";
    Etype[Etype["str"] = 1] = "str";
    Etype[Etype["obj"] = 2] = "obj";
    Etype[Etype["bool"] = 3] = "bool";
    Etype[Etype["any"] = 4] = "any";
})(Etype = exports.Etype || (exports.Etype = {}));
function _2Pascal(under) {
    var re = /[\W_]/;
    var words = under.split(re);
    var pascal = '';
    words.forEach(function (w) { return pascal += w.charAt(0).toUpperCase() + w.slice(1); });
    return pascal;
}
exports._2Pascal = _2Pascal;
var TSproperty = /** @class */ (function () {
    function TSproperty(name, value) {
        this.name = name;
        this.value = value;
        this.elvis = false;
        this.array = false;
        if (this.value) {
            this.settype(this.value);
        }
        else {
            this.type = Etype.any;
        }
    }
    TSproperty.prototype.type2string = function (type) {
        switch (type) {
            case Etype.num:
                return ('number');
            case Etype.str:
                return ('string');
            case Etype.bool:
                return ('boolean');
            case Etype.obj:
                return (this.objType.name);
            default:
                return ('any');
        }
    };
    TSproperty.prototype.settype = function (element) {
        var testelement = element;
        if (Array.isArray(element) && (element.length > 0)) {
            testelement = element[0];
            this.array = true;
        }
        else if (Array.isArray(element)) {
            this.type = Etype.any;
            this.array = true;
            testelement = null;
        }
        switch (typeof testelement) {
            case 'number':
                this.type = Etype.num;
                this.objType = null;
                break;
            case 'string':
                this.type = Etype.str;
                this.objType = null;
                break;
            case 'boolean':
                this.type = Etype.bool;
                this.objType = null;
                break;
            case 'object':
                if (testelement === null) {
                    this.type = Etype.any;
                }
                else {
                    this.type = Etype.obj;
                    this.objType = new Json2TS(_2Pascal(this.name), element);
                }
                break;
            default:
                this.type = Etype.any;
                break;
        }
    };
    TSproperty.prototype.output = function () {
        return (this.name +
            (this.elvis ? '?: ' : ': ') +
            this.type2string(this.type) +
            (this.array ? '[]' : '') +
            ';\n');
    };
    return TSproperty;
}());
exports.TSproperty = TSproperty;
var Json2TS = /** @class */ (function () {
    function Json2TS(name, rawjson) {
        this.name = name;
        this.rawjson = rawjson;
        this.array = false;
        this.any = false;
        this.subtypes = []; // pointers to any subtype
        if (Array.isArray(this.rawjson) && (this.rawjson.length > 0)) {
            this.array = true;
            this.properties = this.process(this.rawjson[0]);
        }
        else if (Array.isArray(this.rawjson)) {
            this.array = true;
            this.any = true;
        }
        else {
            this.properties = this.process(this.rawjson);
        }
    }
    Json2TS.prototype.process = function (raw) {
        var props = [];
        var _loop_1 = function (key) {
            if (raw.hasOwnProperty(key)) {
                var element = raw[key];
                var curprop_1 = new TSproperty(key, element);
                if ((curprop_1.type === Etype.obj) && !this_1.subtypes.find(function (v) { return v.name === curprop_1.objType.name; })) {
                    this_1.subtypes.push(curprop_1.objType);
                }
                props.push(curprop_1);
            }
        };
        var this_1 = this;
        for (var key in raw) {
            _loop_1(key);
        }
        return props;
    };
    Json2TS.prototype.output = function () {
        var o = 'export interface ';
        o += this.name + ' {\n';
        this.properties.forEach(function (prop) {
            o += '  ' + prop.output();
        });
        o += '}';
        return o;
    };
    return Json2TS;
}());
exports.Json2TS = Json2TS;
