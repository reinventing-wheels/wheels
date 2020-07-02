"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsl = void 0;
const math_1 = require("../math");
const f_1 = require("./rgb/f");
exports.hsl = (h, s, l) => {
    const hʹ = h % 1, sʹ = s * (.5 - math_1.abs(.5 - l));
    const r = l + sʹ * math_1.clamp(-1, 1, 12 * math_1.abs((3 / 3 - hʹ) % 1 - .5) - 3);
    const g = l + sʹ * math_1.clamp(-1, 1, 12 * math_1.abs((4 / 3 - hʹ) % 1 - .5) - 3);
    const b = l + sʹ * math_1.clamp(-1, 1, 12 * math_1.abs((5 / 3 - hʹ) % 1 - .5) - 3);
    return f_1.rgb(r, g, b);
};
