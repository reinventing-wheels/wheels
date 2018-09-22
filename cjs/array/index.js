"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../math");
exports.pick = (items) => items[items.length * math_1.random() | 0];
