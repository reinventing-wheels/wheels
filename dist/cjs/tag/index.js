"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identity = exports.tag = exports.raw = exports.mapResult = exports.mapStrings = exports.mapArgs = void 0;
exports.mapArgs = (fn, tag) => (strings, ...args) => tag(strings, ...args.map(fn));
exports.mapStrings = (fn, tag) => (strings, ...args) => tag(strings.map(fn), ...args);
exports.mapResult = (fn, tag) => (strings, ...args) => fn(tag(strings, ...args));
exports.raw = (tag) => (strings, ...args) => tag(strings.raw, ...args);
exports.tag = (fnArg, fnStr, fnRes) => exports.mapResult(fnRes, exports.mapStrings(fnStr, exports.mapArgs(fnArg, exports.identity)));
exports.identity = ([first, ...rest], ...args) => args.reduce((acc, arg, i) => acc + arg + rest[i], first);
