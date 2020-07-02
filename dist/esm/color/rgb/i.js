import { R, G, B } from './constants';
export const lum = (r, g, b) => (R * r + G * g + B * b) / 0xff;
export const rgb = (r, g, b) => (0xff & r) << 16 | (0xff & g) << 8 | (0xff & b);
export const r = (rgb) => 0xff & rgb >> 16;
export const g = (rgb) => 0xff & rgb >> 8;
export const b = (rgb) => 0xff & rgb;
