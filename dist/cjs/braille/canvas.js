"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fill = exports.off = exports.on = exports.toggle = exports.create = exports.render = void 0;
const util_1 = require("./util");
const encodeLine = (line) => Array.from(line, util_1.encodeByte);
const renderLine = (line) => String.fromCharCode(...encodeLine(line));
const dot = (x, y) => 1 << ((y & 3) | (x & 1) << 2);
exports.render = canvas => canvas.map(renderLine).join('\n');
exports.create = (width, height) => Array.from(Array(height >> 2), () => new Uint8Array(width >> 1));
exports.toggle = (canvas, x, y) => canvas[y >> 2][x >> 1] ^= dot(x, y);
exports.on = (canvas, x, y) => canvas[y >> 2][x >> 1] |= dot(x, y);
exports.off = (canvas, x, y) => canvas[y >> 2][x >> 1] &= ~dot(x, y);
exports.fill = (canvas, fn) => {
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
