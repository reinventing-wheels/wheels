"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
const util_1 = require("./util");
exports.encode = (input) => String.fromCharCode(...Array.from(input, b => util_1.encodeByte(util_1.reverseByte(b))));
exports.decode = (input) => Array.from(input, c => util_1.reverseByte(util_1.decodeByte(c.charCodeAt(0))));
