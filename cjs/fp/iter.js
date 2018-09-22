"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = (fn) => function* (it) {
    for (const value of it)
        if (fn(value))
            yield value;
};
exports.map = (fn) => function* (it) {
    for (const value of it)
        yield fn(value);
};
exports.reduce = (fn) => (acc) => (it) => {
    let accʹ = acc;
    for (const value of it)
        accʹ = fn(accʹ, value);
    return accʹ;
};
exports.range = function* (min, max, step = 1) {
    for (let number = min; number < max; number += step)
        yield number;
};
exports.matcher = (re) => function* (input) {
    for (let match; match = re.exec(input);)
        yield match;
};
