"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esc = (...colors) => `\x1b[${colors.join(';')}m`;
exports.wrap = (end) => (start) => (content) => start + content + end;
