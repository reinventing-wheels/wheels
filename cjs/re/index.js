"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const specialChars = /[\\^$.*+?()[\]{}|]/g;
exports.escape = (arg) => arg instanceof RegExp ? arg.source : ('' + arg).replace(specialChars, '\\$&');
exports.re = (flags = '') => ([first, ...rest], ...args) => new RegExp(args.reduce((acc, arg, i) => acc + exports.escape(arg) + rest[i], first), flags);
exports.join = (sep) => (flags = '') => (...parts) => new RegExp(parts.map(exports.escape).join(sep), flags);
exports.and = exports.join('');
exports.or = exports.join('|');
exports.r = exports.re();
