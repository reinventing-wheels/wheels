"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = exports.g = exports.r = exports.rgb = exports.lum = void 0;
const constants_1 = require("./constants");
exports.lum = (r, g, b) => (constants_1.R * r + constants_1.G * g + constants_1.B * b) / 0xff;
exports.rgb = (r, g, b) => (0xff & r) << 16 | (0xff & g) << 8 | (0xff & b);
exports.r = (rgb) => 0xff & rgb >> 16;
exports.g = (rgb) => 0xff & rgb >> 8;
exports.b = (rgb) => 0xff & rgb;
