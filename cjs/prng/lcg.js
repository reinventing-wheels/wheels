"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factory = (a, c) => (seed = 1) => {
    let x = seed;
    return () => x = x * a + c >>> 0;
};
exports.lcg = exports.factory(1664525, 1013904223);
