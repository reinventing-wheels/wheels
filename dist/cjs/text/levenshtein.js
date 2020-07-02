"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levenshtein = void 0;
const math_1 = require("../math");
exports.levenshtein = (a, b) => {
    const vec = new Uint32Array(a.length + 1);
    for (let y = 1; y <= a.length; y++)
        vec[y] = y;
    for (let x = 1; x <= b.length; x++) {
        vec[0] = x;
        for (let last = x - 1, y = 1; y <= a.length; y++) {
            const tmp = vec[y];
            vec[y] = math_1.min(vec[y] + 1, vec[y - 1] + 1, last + +(a[y - 1] !== b[x - 1]));
            last = tmp;
        }
    }
    return vec[a.length];
};
