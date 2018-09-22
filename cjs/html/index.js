"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctype = (html) => '<!doctype html>' + html;
exports.minify = (html) => html.replace(/\s*(^|$|[<>])\s*/g, '$1');
exports.encode = (arg) => arg.replace(/[<>&"]/g, c => `&#${c.charCodeAt(0)};`);
