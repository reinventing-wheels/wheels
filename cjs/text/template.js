"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderer = (tmpl, arg = '$') => new Function(arg, 'return `' + tmpl + '`');
exports.render = (tmpl, obj) => exports.renderer(tmpl, '{' + Object.keys(obj) + '}')(obj);
