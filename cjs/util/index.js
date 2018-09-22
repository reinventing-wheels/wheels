"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuple = (arr) => arr;
exports.firstNonNull = (...args) => {
    for (const arg of args)
        if (arg != null)
            return arg;
};
