"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.srgb = exports.rgb = void 0;
exports.rgb = (srgb) => srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
exports.srgb = (rgb) => rgb <= 0.0031308 ? rgb * 12.92 : (rgb ** (1 / 2.4)) * 1.055 - 0.055;
