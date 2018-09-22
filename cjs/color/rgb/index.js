"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../../math");
const i = require("./i");
exports.i = i;
const f = require("./f");
exports.f = f;
exports.random = () => math_1.floor(math_1.random() * 0x1000000);
exports.lum = (rgb) => i.lum(i.r(rgb), i.g(rgb), i.b(rgb));
exports.hex = (rgb) => '#' + ('00000' + math_1.floor(rgb).toString(16)).slice(-6);
__export(require("./constants"));
__export(require("./operations"));
