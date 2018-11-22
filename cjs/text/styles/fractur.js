"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
exports.regular = util_1.replace([util_1.re_AZ, chr => util_1.str(0x1d504 + util_1.idx_az(chr))], [util_1.re_az, chr => util_1.str(0x1d51e + util_1.idx_az(chr))]);
exports.bold = util_1.replace([util_1.re_AZ, chr => util_1.str(0x1d56c + util_1.idx_az(chr))], [util_1.re_az, chr => util_1.str(0x1d586 + util_1.idx_az(chr))]);
