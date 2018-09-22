"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spaces = /(?:\n|\t|\p{Z})/ug;
const unsafe = /(?!\n)(?:\p{Cc}|\p{Cf}|\p{Cn}|\p{Co}|\p{Mn})/ug;
exports.sanitize = (text) => text
    .normalize('NFKC')
    .replace(spaces, ' ')
    .replace(unsafe, '');
