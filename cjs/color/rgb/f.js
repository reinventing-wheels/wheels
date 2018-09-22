"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i_1 = require("./i");
const constants_1 = require("./constants");
exports.lum = (r, g, b) => constants_1.R * r + constants_1.G * g + constants_1.B * b;
exports.rgb = (r, g, b) => i_1.rgb(.5 + 0xff * r, .5 + 0xff * g, .5 + 0xff * b);
exports.r = (rgb) => i_1.r(rgb) / 0xff;
exports.g = (rgb) => i_1.g(rgb) / 0xff;
exports.b = (rgb) => i_1.b(rgb) / 0xff;
