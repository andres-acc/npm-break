"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numbersInformation = void 0;
var numbersInformation = function (numbers) {
    if (numbers.length === 0) {
        return null;
    }
    return {
        avg: numbers.reduce(function (a, b) { return a + b; }) / numbers.length,
        sum: numbers.reduce(function (a, b) { return a + b; }),
        max: Math.max.apply(Math, __spreadArray([], __read(numbers), false)),
        min: Math.min.apply(Math, __spreadArray([], __read(numbers), false))
    };
};
exports.numbersInformation = numbersInformation;
