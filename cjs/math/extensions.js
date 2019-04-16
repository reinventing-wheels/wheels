"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
exports.TAU = 2 * native_1.PI, exports.PHI = 5 ** .5 * .5 + .5;
exports.ε = native_1.EPSILON, exports.e = native_1.E, exports.π = native_1.PI, exports.τ = exports.TAU, exports.ϕ = exports.PHI;
exports.add = (a, b) => a + b, exports.sub = (a, b) => a - b, exports.mul = (a, b) => a * b, exports.div = (a, b) => a / b;
exports.clamp = (a, b, t) => native_1.min(native_1.max(a, t), b), exports.lerp = (a, b, t) => a + t * (b - a), exports.norm = (a, b, t) => (t - a) / (b - a), exports.map = (aʹ, bʹ, aʺ, bʺ, t) => exports.lerp(aʺ, bʺ, exports.norm(aʹ, bʹ, t));
