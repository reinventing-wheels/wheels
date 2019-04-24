const specialChars = /[\\^$.*+?()[\]{}|]/g

export const escape = (arg: any) =>
  arg instanceof RegExp ? arg.source : ('' + arg).replace(specialChars, '\\$&')

export const re = (flags = '') => ([ first, ...rest ]: TemplateStringsArray, ...args: any[]) =>
  new RegExp(args.reduce((acc, arg, i) => acc + escape(arg) + rest[i], first), flags)

export const join = (sep: string) => (flags = '') => (...parts: any[]) =>
  new RegExp(parts.map(escape).join(sep), flags)

export const and = join('')
export const or = join('|')
export const r = re()
