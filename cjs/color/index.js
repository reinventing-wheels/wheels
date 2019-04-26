"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const srgb = require("./srgb");
exports.srgb = srgb;
const cubehelix = require("./cubehelix");
exports.cubehelix = cubehelix;
__export(require("./hsl"));
__export(require("./rgb"));
__export(require("./sinebow"));
