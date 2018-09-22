import { raw, tag } from '../tag';
const specialChars = /[\\^$.*+?()[\]{}|]/g;
export const escape = (arg) => arg instanceof RegExp
    ? arg.source
    : ('' + arg).replace(specialChars, '\\$&');
export const re = (flags = '') => raw(tag(escape, x => x, re => RegExp(re, flags)));
export const join = (sep) => (flags = '') => (...parts) => RegExp(parts.map(escape).join(sep), flags);
export const and = join('');
export const or = join('|');
