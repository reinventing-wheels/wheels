"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encoding_1 = require("./encoding");
exports.create = (width, height) => Array.from(Array(height >> 2), () => new Uint8Array(width >> 1));
exports.toggle = (canvas, x, y) => canvas[y >> 2][x >> 1] ^= 1 << ((y & 3) | (x & 1) << 2);
exports.set = (canvas, x, y) => canvas[y >> 2][x >> 1] |= 1 << ((y & 3) | (x & 1) << 2);
exports.unset = (canvas, x, y) => canvas[y >> 2][x >> 1] &= ~(1 << ((y & 3) | (x & 1) << 2));
exports.render = canvas => canvas.map(line => String.fromCharCode(...Array.from(line, encoding_1.encodeByte))).join('\n');
