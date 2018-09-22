import { encode } from '../html';
const selfClosing = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
export const isSelfClosing = (arg) => selfClosing.test(arg);
export const isElement = (arg) => arg && arg.tag && arg.children;
export const isComponent = (arg) => typeof arg === 'function';
export const toSafeString = (arg) => arg !== true && arg !== false && arg != null
    ? encode('' + arg)
    : '';
