import { get } from '../object'

export type IFormat = (...args: any[]) => string
export type IFormatTag = <T>([head, ...tail]: ReadonlyArray<string>, ...fns: ((obj: T) => any)[]) => (obj: T) => string

export const tag: IFormatTag = ([ head, ...tail ], ...fns) =>
  obj => fns.reduce((acc, fn, i) => acc + fn(obj) + tail[i], head)

export const format = (re: RegExp) => (tmpl: string): IFormat =>
  (...args) => tmpl.replace(re, (_, path) => get(args, path))

export const brackets = format(/{(.*?)}/g)

export const hashBrackets = format(/#{(.*?)}/g)

export const dollarBrackets = format(/\${(.*?)}/g)

export const doubleBrackets = format(/{{(.*?)}}/g)
