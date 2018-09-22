"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generic = (polynomial) => (bytes, previous = 0) => {
    let hash = ~previous;
    for (let j, i = 0; i < bytes.length; i++)
        for (hash ^= bytes[i], j = 8; j--;)
            hash = hash >>> 1 ^ (hash & 1 && polynomial);
    return ~hash >>> 0;
};
exports.crc32 = exports.generic(0xEDB88320);
exports.crc32c = exports.generic(0x82F63B78);
