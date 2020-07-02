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
exports.fg = exports.bg = exports.hidden = exports.reverse = exports.blink = exports.underlined = exports.dim = exports.bold = void 0;
const bg = require("./bg");
exports.bg = bg;
const fg = require("./fg");
exports.fg = fg;
const util_1 = require("./util");
exports.bold = util_1.wrap(util_1.esc(22))(util_1.esc(1)), exports.dim = util_1.wrap(util_1.esc(22))(util_1.esc(2)), exports.underlined = util_1.wrap(util_1.esc(24))(util_1.esc(4)), exports.blink = util_1.wrap(util_1.esc(25))(util_1.esc(5)), exports.reverse = util_1.wrap(util_1.esc(27))(util_1.esc(7)), exports.hidden = util_1.wrap(util_1.esc(28))(util_1.esc(8));
__exportStar(require("./util"), exports);
