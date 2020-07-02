"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xs4 = exports.xs1 = void 0;
exports.xs1 = (seed = 1) => {
    let x = seed;
    return () => {
        x ^= x << 13;
        x ^= x >>> 17;
        x ^= x << 5;
        return x >>> 0;
    };
};
exports.xs4 = (seed0 = 1, seed1 = 1, seed2 = 1, seed3 = 1) => {
    let x = seed0;
    let y = seed1;
    let z = seed2;
    let w = seed3;
    let t;
    return () => {
        t = x ^ x << 11;
        x = y;
        y = z;
        z = w;
        w = w ^ w >>> 19 ^ t ^ t >>> 8;
        return w >>> 0;
    };
};
