import { proto } from '../object'

export const renderer = (tmpl: string, locals = {}, ref = '$'): (context?: {}) => string =>
  new Function(`{${[...proto(locals)]}}`, ref, `return \`${tmpl}\``).bind(null, locals)

export const render = (tmpl: string, context = {}, ref = '$'): string =>
  new Function(`{${[...proto(context)]}}`, ref, `return \`${tmpl}\``)(context, context)
