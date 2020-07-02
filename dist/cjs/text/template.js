"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.renderer = void 0;
const object_1 = require("../object");
exports.renderer = (tmpl, scope = {}, ref = '$') => new Function(`{${[...object_1.proto(scope)]}}`, ref, `return \`${tmpl}\``).bind(null, scope);
exports.render = (tmpl, context = {}, ref = '$') => new Function(`{${[...object_1.proto(context)]}}`, ref, `return \`${tmpl}\``)(context, context);
