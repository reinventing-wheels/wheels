"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const bg = require("./bg");
exports.bg = bg;
const fg = require("./fg");
exports.fg = fg;
const util_1 = require("./util");
exports.bold = util_1.wrap(util_1.esc(22))(util_1.esc(1)), exports.dim = util_1.wrap(util_1.esc(22))(util_1.esc(2)), exports.underlined = util_1.wrap(util_1.esc(24))(util_1.esc(4)), exports.blink = util_1.wrap(util_1.esc(25))(util_1.esc(5)), exports.reverse = util_1.wrap(util_1.esc(27))(util_1.esc(7)), exports.hidden = util_1.wrap(util_1.esc(28))(util_1.esc(8));
__export(require("./util"));
