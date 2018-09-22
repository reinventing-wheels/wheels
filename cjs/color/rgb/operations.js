"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../../math");
const i = require("./i");
const f = require("./f");
exports.add = (rgbʹ, rgbʺ) => i.rgb(math_1.min(i.r(rgbʹ) + i.r(rgbʺ), 0xff), math_1.min(i.g(rgbʹ) + i.g(rgbʺ), 0xff), math_1.min(i.b(rgbʹ) + i.b(rgbʺ), 0xff));
exports.sub = (rgbʹ, rgbʺ) => i.rgb(math_1.max(i.r(rgbʹ) - i.r(rgbʺ), 0), math_1.max(i.g(rgbʹ) - i.g(rgbʺ), 0), math_1.max(i.b(rgbʹ) - i.b(rgbʺ), 0));
exports.mul = (rgbʹ, rgbʺ) => i.rgb(f.r(rgbʹ) * i.r(rgbʺ) + .5, f.g(rgbʹ) * i.g(rgbʺ) + .5, f.b(rgbʹ) * i.b(rgbʺ) + .5);
exports.mix = (rgbʹ, rgbʺ) => (t) => i.rgb(math_1.lerp(i.r(rgbʹ), i.r(rgbʺ), t), math_1.lerp(i.g(rgbʹ), i.g(rgbʺ), t), math_1.lerp(i.b(rgbʹ), i.b(rgbʺ), t));
