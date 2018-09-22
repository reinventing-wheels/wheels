"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../math");
const f_1 = require("./rgb/f");
exports.sinebow = (h, s, l) => {
    const sʹ = s * (.5 - math_1.abs(.5 - l));
    const r = l + sʹ * math_1.cos(math_1.τ * (0 / 3 - h));
    const g = l + sʹ * math_1.cos(math_1.τ * (1 / 3 - h));
    const b = l + sʹ * math_1.cos(math_1.τ * (2 / 3 - h));
    return f_1.rgb(r, g, b);
};
