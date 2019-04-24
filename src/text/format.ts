import { get } from '../object'

export const f = <T>([ head, ...tail ]: TemplateStringsArray, ...fns: ((arg: T) => any)[]) =>
  (arg: T) => fns.reduce((acc, fn, i) => acc + fn(arg) + tail[i], head)

export const format = (re: RegExp) => (tmpl: string) =>
  (...args: any[]) => tmpl.replace(re, (_, path) => get(args, path))

export const brackets = format(/{(.*?)}/g)
export const hashBrackets = format(/#{(.*?)}/g)
export const dollarBrackets = format(/\${(.*?)}/g)
export const doubleBrackets = format(/{{(.*?)}}/g)
