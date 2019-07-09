"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
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
__export(require("./deep-copy"));
