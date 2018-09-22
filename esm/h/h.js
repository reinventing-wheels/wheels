import { isComponent } from './util';
export const h = (tag, props, ...children) => isComponent(tag)
    ? tag({ children, ...props })
    : { tag, children, props: props || {} };
