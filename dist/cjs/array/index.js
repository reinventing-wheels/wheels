"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.pick = void 0;
const math_1 = require("../math");
exports.pick = (items) => items[items.length * math_1.random() | 0];
exports.shuffle = (items) => {
    for (let i = items.length; i > 0;) {
        const j = Math.floor(Math.random() * i--);
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
};
__exportStar(require("./sort-indices"), exports);
