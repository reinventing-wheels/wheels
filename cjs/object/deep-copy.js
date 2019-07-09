"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapObject = (obj, fn) => {
    const proto = Object.getPrototypeOf(obj);
    const props = Object.getOwnPropertyDescriptors(obj);
    for (const key in props)
        props[key].value = fn(props[key].value);
    return Object.create(proto, props);
};
exports.deepCopy = (arg) => typeof arg === 'object' && arg !== null
    ? Array.isArray(arg)
        ? arg.map(exports.deepCopy)
        : mapObject(arg, exports.deepCopy)
    : arg;
