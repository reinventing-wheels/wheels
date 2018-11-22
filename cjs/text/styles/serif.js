"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
exports.bold = util_1.replace([util_1.re_AZ, chr => util_1.str(0x1d400 + util_1.idx_az(chr))], [util_1.re_az, chr => util_1.str(0x1d41a + util_1.idx_az(chr))], [util_1.re_09, chr => util_1.str(0x1d7ce + util_1.idx_09(chr))]);
exports.italic = util_1.replace([util_1.re_AZ, chr => util_1.str(0x1d434 + util_1.idx_az(chr))], [util_1.re_az, chr => util_1.str(0x1d44e + util_1.idx_az(chr))]);
exports.boldItalic = util_1.replace([util_1.re_AZ, chr => util_1.str(0x1d468 + util_1.idx_az(chr))], [util_1.re_az, chr => util_1.str(0x1d482 + util_1.idx_az(chr))]);
