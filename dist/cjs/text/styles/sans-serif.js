"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boldItalic = exports.italic = exports.bold = exports.regular = void 0;
const util_1 = require("./util");
exports.regular = util_1.replace([util_1.re_AZ, chr => util_1.str(0x1d5a0 + util_1.idx_az(chr))], [util_1.re_az, chr => util_1.str(0x1d5ba + util_1.idx_az(chr))], [util_1.re_09, chr => util_1.str(0x1d7e2 + util_1.idx_09(chr))]);
exports.bold = util_1.replace([util_1.re_AZ, chr => util_1.str(0x1d5d4 + util_1.idx_az(chr))], [util_1.re_az, chr => util_1.str(0x1d5ee + util_1.idx_az(chr))], [util_1.re_09, chr => util_1.str(0x1d7ec + util_1.idx_09(chr))]);
exports.italic = util_1.replace([util_1.re_AZ, chr => util_1.str(0x1d608 + util_1.idx_az(chr))], [util_1.re_az, chr => util_1.str(0x1d622 + util_1.idx_az(chr))]);
exports.boldItalic = util_1.replace([util_1.re_AZ, chr => util_1.str(0x1d63c + util_1.idx_az(chr))], [util_1.re_az, chr => util_1.str(0x1d656 + util_1.idx_az(chr))]);
