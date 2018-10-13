import { encodeByte } from './encoding';
export const create = (width, height) => Array.from(Array(height >> 2), () => new Uint8Array(width >> 1));
export const toggle = (canvas, x, y) => canvas[y >> 2][x >> 1] ^= 1 << ((y & 3) | (x & 1) << 2);
export const set = (canvas, x, y) => canvas[y >> 2][x >> 1] |= 1 << ((y & 3) | (x & 1) << 2);
export const unset = (canvas, x, y) => canvas[y >> 2][x >> 1] &= ~(1 << ((y & 3) | (x & 1) << 2));
export const render = canvas => canvas.map(line => String.fromCharCode(...Array.from(line, encodeByte))).join('\n');
