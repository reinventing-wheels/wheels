"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const styles = require("./styles");
exports.styles = styles;
const format = require("./format");
exports.format = format;
const macro = require("./macro");
exports.macro = macro;
const template = require("./template");
exports.template = template;
__export(require("./levenshtein"));
__export(require("./sanitize"));
__export(require("./split"));
