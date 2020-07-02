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
exports.template = exports.macro = exports.format = exports.styles = void 0;
const styles = require("./styles");
exports.styles = styles;
const format = require("./format");
exports.format = format;
const macro = require("./macro");
exports.macro = macro;
const template = require("./template");
exports.template = template;
__exportStar(require("./levenshtein"), exports);
__exportStar(require("./sanitize"), exports);
__exportStar(require("./split"), exports);
