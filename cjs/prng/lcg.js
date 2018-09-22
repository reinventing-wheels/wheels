"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generic = (a, c) => (seed = 1) => {
    let x = seed;
    return () => x = x * a + c >>> 0;
};
exports.lcg = exports.generic(1664525, 1013904223);
