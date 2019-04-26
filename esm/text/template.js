import { proto } from '../object';
export const renderer = (tmpl, locals = {}, ref = '$') => new Function(`{${[...proto(locals)]}}`, ref, `return \`${tmpl}\``).bind(null, locals);
export const render = (tmpl, context = {}, ref = '$') => new Function(`{${[...proto(context)]}}`, ref, `return \`${tmpl}\``)(context, context);
