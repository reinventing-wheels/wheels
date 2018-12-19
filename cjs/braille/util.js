"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseByte = (b) => (b & 0x01) << 7 | (b & 0x02) << 5 | (b & 0x04) << 3 | (b & 0x08) << 1 |
    (b & 0x10) >> 1 | (b & 0x20) >> 3 | (b & 0x40) >> 5 | (b & 0x80) >> 7;
exports.encodeByte = (b) => (b & 0x08) << 3 | (b & 0x70) >> 1 | (b & 0x87) | 0x2800;
exports.decodeByte = (b) => (b & 0x40) >> 3 | (b & 0x38) << 1 | (b & 0x87);
