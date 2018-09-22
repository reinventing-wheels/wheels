"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
const fit = (fn) => (width, height) => (widthʹ, heightʹ) => fn(width / widthʹ, height / heightʹ);
exports.contain = fit(native_1.min);
exports.cover = fit(native_1.max);
