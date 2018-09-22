"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../math");
const iter_1 = require("./iter");
exports.sum = iter_1.reduce(math_1.add)(0), exports.product = iter_1.reduce(math_1.mul)(0);
exports.add = (b) => (a) => a + b, exports.sub = (b) => (a) => a - b, exports.mul = (b) => (a) => a * b, exports.div = (b) => (a) => a / b;
