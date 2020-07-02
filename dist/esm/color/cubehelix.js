import { π, τ, cos, sin, clamp } from '../math';
import { rgb } from './rgb/f';
export const core = (x, y, z) => {
    const cosx = cos(x), sinx = sin(x);
    const r = clamp(0, 1, z + y * (-0.14861 * cosx + +1.78277 * sinx));
    const g = clamp(0, 1, z + y * (-0.29227 * cosx + -0.90649 * sinx));
    const b = clamp(0, 1, z + y * (+1.97294 * cosx));
    return rgb(r, g, b);
};
export const factory = (start = .5, rots = -1.5, hue = 1) => (t) => core(τ * (start / 3 + rots * t), .5 * hue * t * (1 - t), t);
export const standard = (t) => core(π * (1 / 3 - 3 * t), .5 * t * (1 - t), t);
export const hsl = (h, s, l) => core(τ * (h + 1 / 3), .5 * s * l * (1 - l), l);
