"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_1 = require("../tag");
const specialChars = /[\\^$.*+?()[\]{}|]/g;
exports.escape = (arg) => arg instanceof RegExp
    ? arg.source
    : ('' + arg).replace(specialChars, '\\$&');
exports.re = (flags = '') => tag_1.raw(tag_1.tag(exports.escape, x => x, re => RegExp(re, flags)));
exports.join = (sep) => (flags = '') => (...parts) => RegExp(parts.map(exports.escape).join(sep), flags);
exports.and = exports.join('');
exports.or = exports.join('|');
