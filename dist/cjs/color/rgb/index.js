"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.f = exports.i = exports.hex = exports.lum = exports.random = void 0;
const math_1 = require("../../math");
const i = require("./i");
exports.i = i;
const f = require("./f");
exports.f = f;
exports.random = () => math_1.floor(math_1.random() * 0x1000000);
exports.lum = (rgb) => i.lum(i.r(rgb), i.g(rgb), i.b(rgb));
exports.hex = (rgb) => '#' + ('00000' + math_1.floor(rgb).toString(16)).slice(-6);
__exportStar(require("./constants"), exports);
__exportStar(require("./operations"), exports);
