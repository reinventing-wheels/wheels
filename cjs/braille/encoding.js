"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iter_1 = require("../fp/iter");
exports.decodeByte = (n) => (n & 0x01) << 7 | (n & 0x02) << 5 | (n & 0x04) << 3 | (n & 0x08) |
    (n & 0x10) >> 2 | (n & 0x20) >> 4 | (n & 0x40) >> 2 | (n & 0x80) >> 7;
exports.encodeByte = (n) => (n & 0x01) << 7 | (n & 0x02) << 4 | (n & 0x04) << 2 | (n & 0x08) |
    (n & 0x10) << 2 | (n & 0x20) >> 3 | (n & 0x40) >> 5 | (n & 0x80) >> 7 | 0x2800;
exports.encode = (bytes) => String.fromCharCode(...iter_1.map(exports.encodeByte)(bytes));
exports.decode = (str) => Array.from(str, c => exports.decodeByte(c.charCodeAt(0)));
