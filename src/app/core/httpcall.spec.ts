import { TSproperty, Json2TS, Etype } from './httpcall';
const tsc = require('typescript-compiler');
const simple = require('./testjsonrest/allsimple.json');


describe(`TSproperty simple types`, () => {
    it(`should handle a number`, () => {
        // Arrange
        const numprop = new TSproperty('numb', 5 );
        expect(numprop.type).toBe(Etype.num);
        // Assert
    });
    it('should handle a string', () => {
        const strprop = new TSproperty('str', 'mystring');
        expect(strprop.type).toBe(Etype.str);
    });
    it(`should handle a boolean`, () => {
            // Arrange
            const boolprop = new TSproperty('mybool', true);
            // Act

            // Assert
            expect(boolprop.type).toBe(Etype.bool);
    });
    it(`should handle a number array`, () => {
            // Arrange
            const arrayprop = new TSproperty('arr', [0, 1 , 2, 4]);
            expect(arrayprop.type).toBe(Etype.num);
            expect(arrayprop.array).toBe(true);
    });
    it(`should handle a string array`, () => {
        // Arrange
        const arrayprop = new TSproperty('arr', ['one', 'two', 'three']);
        expect(arrayprop.type).toBe(Etype.str);
        expect(arrayprop.array).toBe(true);
    });
    it(`should handle a boolean array`, () => {
        // Arrange
        const arrayprop = new TSproperty('arr', [true, false, true, false]);
        expect(arrayprop.type).toBe(Etype.bool);
        expect(arrayprop.array).toBe(true);
    });
    it(`should handle an empty array as any[]`, () => {
            // Arrange
            const arrayprop = new TSproperty('empty', []);
            // Act, Assert
            expect(arrayprop.array).toBe(true);
            expect(arrayprop.type).toBe(Etype.any);
    });
    it(`should handle null objects as any`, () => {
            // Arrange
            const nullobj = new TSproperty('nullobj', null);
            // Assert
            expect(nullobj.type).toBe(Etype.any);
    it(`should handle empty objects as any`, () => {
            // Arrange
            const obj = new TSproperty('emptyobj', {});
            // Assert
            expect(obj.type).toBe(Etype.any);
    });
    });
describe(`Json2TS basic types`, () => {
    it(`should create a structure with simple types`, () => {
        // Arrange
        const mystruct = {'one': 1, 'two': 'too', 'three': true, 'four': null};
        // Act
        const Tsmystruct = new Json2TS('MyStruct', mystruct);
        // Assert
        expect(Tsmystruct.properties.length).toBe(4);
        expect(Tsmystruct.properties[0].type).toBe(Etype.num);
    });
});
describe(`Nested Json with Json2TS`, () => {
    it(`should find one subtype`, () => {
        // Act
        const tsmyst = new Json2TS('simple', simple) ;
        // Assert
        expect(tsmyst.subtypes.length).toBe(1);
        expect(tsmyst.subtypes[0].properties.length).toBe(3);
    });
    it(`should compile properly to a typescript interface on output`, () => {
            // Arrange
            const tsmyst = new Json2TS('simple', simple);
            // Act
            const mysimple = tsc.compileString(tsmyst.output());
            expect(mysimple).toBeDefined();
            console.log(JSON.stringify(mysimple));
            // Assert

    });
});
});
