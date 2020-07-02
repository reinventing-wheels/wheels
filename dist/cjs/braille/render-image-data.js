"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderImageData = void 0;
const i_1 = require("../color/rgb/i");
const charCodes = function* ({ width, height, data }) {
    const xy00 = 0x0 * width, xy10 = 0x4 + xy00, xy01 = 0x4 * width, xy11 = 0x4 + xy01, xy02 = 0x8 * width, xy12 = 0x4 + xy02, xy03 = 0xc * width, xy13 = 0x4 + xy03;
    for (let y = 0; y < height; y += 4) {
        for (let x = 0; x < width; x += 2) {
            const r = x + y * width << 2, g = r | 1, b = r | 2;
            const b0 = i_1.lum(data[r + xy00], data[g + xy00], data[b + xy00]), b1 = i_1.lum(data[r + xy01], data[g + xy01], data[b + xy01]), b2 = i_1.lum(data[r + xy02], data[g + xy02], data[b + xy02]), b3 = i_1.lum(data[r + xy03], data[g + xy03], data[b + xy03]), b4 = i_1.lum(data[r + xy10], data[g + xy10], data[b + xy10]), b5 = i_1.lum(data[r + xy11], data[g + xy11], data[b + xy11]), b6 = i_1.lum(data[r + xy12], data[g + xy12], data[b + xy12]), b7 = i_1.lum(data[r + xy13], data[g + xy13], data[b + xy13]);
            const byte = .5 + b0 << 0 | .5 + b4 << 3 |
                .5 + b1 << 1 | .5 + b5 << 4 |
                .5 + b2 << 2 | .5 + b6 << 5 |
                .5 + b3 << 6 | .5 + b7 << 7;
            yield 10240 | byte;
        }
        yield 10;
    }
};
exports.renderImageData = (imageData) => String.fromCharCode(...charCodes(imageData));
