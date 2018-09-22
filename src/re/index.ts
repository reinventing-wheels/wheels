import { raw, tag } from '../tag'

const specialChars = /[\\^$.*+?()[\]{}|]/g

export const escape = (arg: any) =>
  arg instanceof RegExp
    ? arg.source
    : ('' + arg).replace(specialChars, '\\$&')

export const re = (flags = '') =>
  raw(tag(escape, x => x, re => RegExp(re, flags)))

export const join = (sep: string) => (flags = '') => (...parts: any[]) =>
  RegExp(parts.map(escape).join(sep), flags)

export const and = join('')
export const or = join('|')
