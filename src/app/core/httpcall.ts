export interface IHttpCall {
    rawURL: string;
    dnsName?: string;
    pathFragments?: string[];
    headers: Map<string, string>;
    params: Map<string, string>;
}

export enum Etype {num, str, obj, bool, any}

export class TSproperty {
    elvis = false;
    array = false;
    type: Etype;
    objType: Json2TS;

    constructor(public name?: string) {}

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

    constructor(public name: string, public rawjson: any) {
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
                const curprop = new TSproperty(key);
                let testelement = element;
                if (Array.isArray(element) && (element.length > 0)) {
                    testelement = element[0];
                    curprop.array = true;
                }
                switch (typeof testelement) {
                case 'number':
                    curprop.type = Etype.num;
                    curprop.objType = null;
                    break;
                case 'string':
                    curprop.type = Etype.str;
                    curprop.objType = null;
                    break;
                case 'boolean':
                    curprop.type = Etype.bool;
                    curprop.objType = null;
                    break;
                case 'object':
                    if (testelement === null) {
                        curprop.type = Etype.any;
                    } else {
                        curprop.type = Etype.obj;
                        curprop.objType = new Json2TS('I' + key, element);
                        if (!this.subtypes.find(v => v.name === curprop.objType.name )) {
                            this.subtypes.push(curprop.objType);
                        }
                    }
                    break;
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

}
