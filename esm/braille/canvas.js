const enc = (x) => (x & 0x08) << 3 | (x & 0x70) >> 1 | (x & 0x87) | 0x2800;
const row = (x) => String.fromCharCode(...Array.from(x, enc));
export const create = (width, height) => Array.from(Array(height >> 2), () => new Uint8Array(width >> 1));
export const toggle = (canvas, x, y) => canvas[y >> 2][x >> 1] ^= 1 << ((y & 3) | (x & 1) << 2);
export const set = (canvas, x, y) => canvas[y >> 2][x >> 1] |= 1 << ((y & 3) | (x & 1) << 2);
export const unset = (canvas, x, y) => canvas[y >> 2][x >> 1] &= ~(1 << ((y & 3) | (x & 1) << 2));
export const render = canvas => canvas.map(row).join('\n');
