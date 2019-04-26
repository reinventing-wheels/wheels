import { get } from '../object';
export const f = ([head, ...tail], ...fns) => (arg) => fns.reduce((acc, fn, i) => acc + fn(arg) + tail[i], head);
export const format = (re) => (tmpl) => (...args) => tmpl.replace(re, (_, path) => get(args, path));
export const brackets = format(/{(.*?)}/g);
export const hashBrackets = format(/#{(.*?)}/g);
export const dollarBrackets = format(/\${(.*?)}/g);
export const doubleBrackets = format(/{{(.*?)}}/g);
