"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lut = exports.at = void 0;
exports.at = (x, y, order) => {
    let z = 0;
    for (let i = order; i--; x >>= 1, y >>= 1)
        z = (x & 1 ^ y & 1 | z << 1) << 1 | y & 1;
    return z + .5;
};
exports.lut = (order) => {
    const size = 1 << order, area = size * size;
    const lut = new Float32Array(area);
    for (let y = 0; y < size; y++)
        for (let x = 0; x < size; x++)
            lut[x + y * size] = exports.at(x, y, order) / area;
    return (x, y) => lut[x % size + y % size * size];
};
