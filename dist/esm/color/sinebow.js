import { τ, cos, abs } from '../math';
import { rgb } from './rgb/f';
export const sinebow = (h, s, l) => {
    const sʹ = s * (.5 - abs(.5 - l));
    const r = l + sʹ * cos(τ * (0 / 3 - h));
    const g = l + sʹ * cos(τ * (1 / 3 - h));
    const b = l + sʹ * cos(τ * (2 / 3 - h));
    return rgb(r, g, b);
};
