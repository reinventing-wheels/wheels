import { encodeByte } from './util';
const encodeLine = (line) => Array.from(line, encodeByte);
const renderLine = (line) => String.fromCharCode(...encodeLine(line));
const dot = (x, y) => 1 << ((y & 3) | (x & 1) << 2);
export const render = canvas => canvas.map(renderLine).join('\n');
export const create = (width, height) => Array.from(Array(height >> 2), () => new Uint8Array(width >> 1));
export const toggle = (canvas, x, y) => canvas[y >> 2][x >> 1] ^= dot(x, y);
export const on = (canvas, x, y) => canvas[y >> 2][x >> 1] |= dot(x, y);
export const off = (canvas, x, y) => canvas[y >> 2][x >> 1] &= ~dot(x, y);
export const fill = (canvas, fn) => {
    const w = canvas[0].length << 1;
    const h = canvas.length << 2;
    for (let y = 0; y < h; y += 4)
        for (let x = 0; x < w; x += 2)
            canvas[y >> 2][x >> 1] =
                fn(x + 0, y + 0) << 0 | fn(x + 1, y + 0) << 4 |
                    fn(x + 0, y + 1) << 1 | fn(x + 1, y + 1) << 5 |
                    fn(x + 0, y + 2) << 2 | fn(x + 1, y + 2) << 6 |
                    fn(x + 0, y + 3) << 3 | fn(x + 1, y + 3) << 7;
};
