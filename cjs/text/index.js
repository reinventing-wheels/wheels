"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const fonts = require("./fonts");
exports.fonts = fonts;
const format = require("./format");
exports.format = format;
__export(require("./levenshtein"));
__export(require("./sanitize"));
__export(require("./split"));
