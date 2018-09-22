"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enc = (x) => (x & 0x08) << 3 | (x & 0x70) >> 1 | (x & 0x87) | 0x2800;
const row = (x) => String.fromCharCode(...Array.from(x, enc));
exports.create = (width, height) => Array.from(Array(height >> 2), () => new Uint8Array(width >> 1));
exports.toggle = (canvas, x, y) => canvas[y >> 2][x >> 1] ^= 1 << ((y & 3) | (x & 1) << 2);
exports.set = (canvas, x, y) => canvas[y >> 2][x >> 1] |= 1 << ((y & 3) | (x & 1) << 2);
exports.unset = (canvas, x, y) => canvas[y >> 2][x >> 1] &= ~(1 << ((y & 3) | (x & 1) << 2));
exports.render = canvas => canvas.map(row).join('\n');
