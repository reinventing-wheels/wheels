"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../math");
const f_1 = require("./rgb/f");
exports.core = (x, y, z) => {
    const cosx = math_1.cos(x), sinx = math_1.sin(x);
    const r = math_1.clamp(0, 1, z + y * (-0.14861 * cosx + +1.78277 * sinx));
    const g = math_1.clamp(0, 1, z + y * (-0.29227 * cosx + -0.90649 * sinx));
    const b = math_1.clamp(0, 1, z + y * (+1.97294 * cosx));
    return f_1.rgb(r, g, b);
};
exports.lerp = (hʹ = -1 / 6, sʹ = 1, lʹ = 0, hʺ = -5 / 3, sʺ = 1, lʺ = 1) => (t) => {
    const h = hʹ + t * (hʺ - hʹ);
    const s = sʹ + t * (sʺ - sʹ);
    const l = lʹ + t * (lʺ - lʹ);
    return exports.core(math_1.τ * (h + 1 / 3), .5 * s * l * (1 - l), l);
};
exports.classic = (start = .5, rots = -1.5, hue = 1) => (t) => exports.core(math_1.τ * (start / 3 + rots * t), .5 * hue * t * (1 - t), t);
exports.standard = (t) => exports.core(math_1.π * (1 / 3 - 3 * t), .5 * t * (1 - t), t);
