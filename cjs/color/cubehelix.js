"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../math");
const f_1 = require("./rgb/f");
const xyz = (x, y, z) => {
    const cosx = math_1.cos(x), sinx = math_1.sin(x);
    const r = math_1.clamp(0, 1, z + y * (-0.14861 * cosx + +1.78277 * sinx));
    const g = math_1.clamp(0, 1, z + y * (-0.29227 * cosx + -0.90649 * sinx));
    const b = math_1.clamp(0, 1, z + y * (+1.97294 * cosx));
    return f_1.rgb(r, g, b);
};
exports.cubehelix = (hʹ = -1 / 6, sʹ = 1, lʹ = 0, hʺ = -5 / 3, sʺ = 1, lʺ = 1) => (t) => {
    const h = hʹ + t * (hʺ - hʹ);
    const s = sʹ + t * (sʺ - sʹ);
    const l = lʹ + t * (lʺ - lʹ);
    return xyz(math_1.τ * (h + 1 / 3), .5 * s * l * (1 - l), l);
};
