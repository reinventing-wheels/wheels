const specialChars = /[\\^$.*+?()[\]{}|]/g;
export const escape = (arg) => arg instanceof RegExp ? arg.source : ('' + arg).replace(specialChars, '\\$&');
export const re = (flags = '') => ([first, ...rest], ...args) => new RegExp(args.reduce((acc, arg, i) => acc + escape(arg) + rest[i], first), flags);
export const join = (sep) => (flags = '') => (...parts) => new RegExp(parts.map(escape).join(sep), flags);
export const and = join('');
export const or = join('|');
export const r = re();
