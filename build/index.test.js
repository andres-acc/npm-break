"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
test('should return correct operations', function () {
    expect((0, _1.numbersInformation)([1, 2, 3])).toEqual({
        avg: 2,
        sum: 6,
        max: 3,
        min: 1
    });
});
test('should return null on empty array', function () {
    expect((0, _1.numbersInformation)([])).toBe(null);
});
