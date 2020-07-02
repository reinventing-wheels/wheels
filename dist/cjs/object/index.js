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
exports.proto = exports.get = exports.copy = exports.overwrite = exports.extend = void 0;
exports.extend = Object.assign;
exports.overwrite = exports.extend;
exports.copy = (object) => exports.overwrite({}, object);
exports.get = (object, path, sep = '.') => path.split(sep).reduce((o, next) => o && o[next], object);
exports.proto = (object) => {
    const props = new Set();
    for (let o = object; o && o !== Object.prototype; o = Object.getPrototypeOf(o))
        Object.getOwnPropertyNames(o).forEach(prop => props.add(prop));
    return props;
};
__exportStar(require("./deep-copy"), exports);
