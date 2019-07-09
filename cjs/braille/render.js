"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = (w, h, fn) => {
    const lines = [];
    for (let y = 0; y < h; y += 4) {
        const line = [];
        for (let x = 0; x < w; x += 2) {
            const byte = fn(x + 0, y + 0) << 0 | fn(x + 1, y + 0) << 3 |
                fn(x + 0, y + 1) << 1 | fn(x + 1, y + 1) << 4 |
                fn(x + 0, y + 2) << 2 | fn(x + 1, y + 2) << 5 |
                fn(x + 0, y + 3) << 6 | fn(x + 1, y + 3) << 7;
            line.push(0x2800 | byte);
        }
        lines.push(String.fromCharCode(...line));
    }
    return lines.join('\n');
};
