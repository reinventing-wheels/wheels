import { r as rʹ, g as gʹ, b as bʹ, rgb as rgbʹ } from './i';
import { R, G, B } from './constants';
export const lum = (r, g, b) => R * r + G * g + B * b;
export const rgb = (r, g, b) => rgbʹ(.5 + 0xff * r, .5 + 0xff * g, .5 + 0xff * b);
export const r = (rgb) => rʹ(rgb) / 0xff;
export const g = (rgb) => gʹ(rgb) / 0xff;
export const b = (rgb) => bʹ(rgb) / 0xff;
