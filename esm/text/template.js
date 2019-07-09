import { proto } from '../object';
export const renderer = (tmpl, scope = {}, ref = '$') => new Function(`{${[...proto(scope)]}}`, ref, `return \`${tmpl}\``).bind(null, scope);
export const render = (tmpl, context = {}, ref = '$') => new Function(`{${[...proto(context)]}}`, ref, `return \`${tmpl}\``)(context, context);
