"use strict";
exports.__esModule = true;
var httpcall_1 = require("./httpcall");
var tsc = require('typescript-compiler');
var simple = require('./testjsonrest/allsimple.json');
describe("TSproperty simple types", function () {
    it("should handle a number", function () {
        // Arrange
        var numprop = new httpcall_1.TSproperty('numb', 5);
        expect(numprop.type).toBe(httpcall_1.Etype.num);
        // Assert
    });
    it('should handle a string', function () {
        var strprop = new httpcall_1.TSproperty('str', 'mystring');
        expect(strprop.type).toBe(httpcall_1.Etype.str);
    });
    it("should handle a boolean", function () {
        // Arrange
        var boolprop = new httpcall_1.TSproperty('mybool', true);
        // Act
        // Assert
        expect(boolprop.type).toBe(httpcall_1.Etype.bool);
    });
    it("should handle a number array", function () {
        // Arrange
        var arrayprop = new httpcall_1.TSproperty('arr', [0, 1, 2, 4]);
        expect(arrayprop.type).toBe(httpcall_1.Etype.num);
        expect(arrayprop.array).toBe(true);
    });
    it("should handle a string array", function () {
        // Arrange
        var arrayprop = new httpcall_1.TSproperty('arr', ['one', 'two', 'three']);
        expect(arrayprop.type).toBe(httpcall_1.Etype.str);
        expect(arrayprop.array).toBe(true);
    });
    it("should handle a boolean array", function () {
        // Arrange
        var arrayprop = new httpcall_1.TSproperty('arr', [true, false, true, false]);
        expect(arrayprop.type).toBe(httpcall_1.Etype.bool);
        expect(arrayprop.array).toBe(true);
    });
    it("should handle an empty array as any[]", function () {
        // Arrange
        var arrayprop = new httpcall_1.TSproperty('empty', []);
        // Act, Assert
        expect(arrayprop.array).toBe(true);
        expect(arrayprop.type).toBe(httpcall_1.Etype.any);
    });
    it("should handle null objects as any", function () {
        // Arrange
        var nullobj = new httpcall_1.TSproperty('nullobj', null);
        // Assert
        expect(nullobj.type).toBe(httpcall_1.Etype.any);
        it("should handle empty objects as any", function () {
            // Arrange
            var obj = new httpcall_1.TSproperty('emptyobj', {});
            // Assert
            expect(obj.type).toBe(httpcall_1.Etype.any);
        });
    });
    describe("Json2TS basic types", function () {
        it("should create a structure with simple types", function () {
            // Arrange
            var mystruct = { 'one': 1, 'two': 'too', 'three': true, 'four': null };
            // Act
            var Tsmystruct = new httpcall_1.Json2TS('MyStruct', mystruct);
            // Assert
            expect(Tsmystruct.properties.length).toBe(4);
            expect(Tsmystruct.properties[0].type).toBe(httpcall_1.Etype.num);
        });
    });
    describe("Nested Json with Json2TS", function () {
        it("should find one subtype", function () {
            // Act
            var tsmyst = new httpcall_1.Json2TS('simple', simple);
            // Assert
            expect(tsmyst.subtypes.length).toBe(1);
            expect(tsmyst.subtypes[0].properties.length).toBe(3);
        });
        it("should compile properly to a typescript interface on output", function () {
            // Arrange
            var tsmyst = new httpcall_1.Json2TS('simple', simple);
            // Act
            var mysimple = tsc.compileString(tsmyst.output());
            expect(mysimple).toBeDefined();
            console.log(JSON.stringify(mysimple));
            // Assert
        });
    });
});
