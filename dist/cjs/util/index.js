"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstNonNull = exports.tuple = void 0;
exports.tuple = (arr) => arr;
exports.firstNonNull = (...args) => {
    for (const arg of args)
        if (arg != null)
            return arg;
};
