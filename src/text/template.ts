import { proto } from '../object'

export const renderer = (tmpl: string, scope = {}, ref = '$'): (context?: {}) => string =>
  new Function(`{${[...proto(scope)]}}`, ref, `return \`${tmpl}\``).bind(null, scope)

export const render = (tmpl: string, context = {}, ref = '$'): string =>
  new Function(`{${[...proto(context)]}}`, ref, `return \`${tmpl}\``)(context, context)
