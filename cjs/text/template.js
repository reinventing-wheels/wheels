"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("../object");
exports.renderer = (tmpl, locals = {}, ref = '$') => new Function(`{${[...object_1.proto(locals)]}}`, ref, `return \`${tmpl}\``).bind(null, locals);
exports.render = (tmpl, context = {}, ref = '$') => new Function(`{${[...object_1.proto(context)]}}`, ref, `return \`${tmpl}\``)(context, context);
