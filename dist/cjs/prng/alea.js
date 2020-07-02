"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alea = void 0;
exports.alea = (seed0 = 1, seed1 = 1, seed2 = 1, seed3 = 1) => {
    let x = (seed0 >>> 0) / 0x100000000;
    let y = (seed1 >>> 0) / 0x100000000;
    let z = (seed2 >>> 0) / 0x100000000;
    let w = (seed3 >>> 0);
    return () => {
        const t = 2091639 * x + w / 0x100000000;
        return x = y, y = z, z = t - (w = t | 0);
    };
};
