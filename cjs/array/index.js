"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../math");
exports.pick = (items) => items[items.length * math_1.random() | 0];
exports.shuffle = (items) => {
    for (let i = items.length; i > 0;) {
        const j = Math.floor(Math.random() * i--);
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
};
