"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderer = (tmpl, arg = '$') => new Function(arg, 'return `' + tmpl + '`');
exports.render = (tmpl, obj, arg = '$') => new Function(arg, '{' + Object.keys(obj) + '}', 'return `' + tmpl + '`')(obj, obj);
