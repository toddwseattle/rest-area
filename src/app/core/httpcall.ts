export interface IHttpCall {
    rawURL: string;
    host?: string;
    pathFragments?: string[];
    headers: Map<string, string>;
    params: Map<string, string>;
}

export class HttpCall implements IHttpCall {
    host: string = null;
    pathFragments: string[] = [];
    headers: Map<string, string> = null;
    params: Map<string, string> = null;
    rawURL= null;
    private uri: URL;
    constructor(h: IHttpCall) {
      this.rawURL = h.rawURL;
      this.params = h.params;
      this.headers = h.headers;
      this.uri = new URL(this.rawURL);
      this.host = this.uri.hostname;
      this.pathFragments = this.uri.pathname
                .slice(1, this.uri.pathname.length)
                .split('/');
    }
}

export enum Etype {num, str, obj, bool, any}

export function _2Pascal(under: string): string {
    const re = /[\W_]/;
    const words = under.split(re);
    let pascal = '';
    words.forEach( w => pascal += w.charAt(0).toUpperCase() + w.slice(1) );
    return pascal;
}

export class TSproperty {
    elvis = false;
    array = false;
    type: Etype;
    objType: Json2TS;

    constructor(public name?: string, private value?: any, private prefix?: string) {
        if (this.value) {
            this.settype(this.value);
        } else {
            this.type = Etype.any;
        }
    }

    private type2string(type: Etype) {
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
    }
    settype(element: any) {
        let testelement = element;
            if (Array.isArray(element) && (element.length > 0)) {
                testelement = element[0];
                this.array = true;
            } else if (Array.isArray(element)) {
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
                } else {
                    this.type = Etype.obj;
                    this.objType = new Json2TS(this.prefix + _2Pascal(this.name), this.prefix, element);
                }
                break;
            default:
                this.type = Etype.any;
                break;
            }
    }
    output(): string {
        return( this.name +
                (this.elvis ? '?: ' : ': ') +
                this.type2string(this.type) +
                (this.array ? '[]' : '') +
                ';\n'
                );
    }
}

export class Json2TS {
    public array = false;
    public properties: TSproperty[];
    public any = false;

    public subtypes: Json2TS[] = []; // pointers to any subtype

    constructor(public name: string, private pre: string, public rawjson: any) {
        if (Array.isArray(this.rawjson) && (this.rawjson.length > 0)) {
            this.array = true;
            this.properties = this.process(this.rawjson[0]);
        } else if (Array.isArray(this.rawjson)) { // It's an empty array; so we don't know the type
            this.array = true;
            this.any = true;
        } else {
        this.properties = this.process(this.rawjson);
        }
    }

    process(raw: any): TSproperty[] {
        const props: TSproperty[] = [];

        for (const key in raw) {
            if (raw.hasOwnProperty(key)) {
                const element = raw[key];
                const curprop = new TSproperty(key, element, this.pre);
                if ((curprop.type === Etype.obj) && !this.subtypes.find(v => v.name === curprop.objType.name )) {
                    this.subtypes.push(curprop.objType);
                }
            props.push(curprop);
            }
        }
        return props;
    }
    output(): string {
        let o = 'export interface ';
        o += this.name + ' {\n';
        this.properties.forEach(prop => {
            o += '  ' + prop.output();
        });
        o += '}';

        return o;
    }
    fullclipout(h?: HttpCall): string {
      let o = '// ' + this.name + '\n';
        if (h) {
            o += '// generated from ' + h.rawURL + '\n';
        }
      o += this.output() + '\n';
      this.subtypes.forEach(v => o += v.fullclipout() + '\n');
      return o;
    }

}
