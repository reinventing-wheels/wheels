"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("../object");
exports.f = ([head, ...tail], ...fns) => (arg) => fns.reduce((acc, fn, i) => acc + fn(arg) + tail[i], head);
exports.format = (re) => (tmpl) => (...args) => tmpl.replace(re, (_, path) => object_1.get(args, path));
exports.brackets = exports.format(/{(.*?)}/g);
exports.hashBrackets = exports.format(/#{(.*?)}/g);
exports.dollarBrackets = exports.format(/\${(.*?)}/g);
exports.doubleBrackets = exports.format(/{{(.*?)}}/g);
