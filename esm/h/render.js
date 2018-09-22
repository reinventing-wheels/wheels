import { isSelfClosing, isElement, toSafeString } from './util';
import { encode } from '../html';
const shouldPropBeRendered = ([_key, value]) => value !== false && value != null;
const renderProp = ([key, value]) => value !== true && value !== ''
    ? ` ${key}="${encode('' + value)}"`
    : ` ${key}`;
const renderProps = (props) => Object
    .entries(props)
    .filter(shouldPropBeRendered)
    .map(renderProp)
    .join('');
const renderChildren = (arg) => Array.isArray(arg)
    ? arg.map(render).join('')
    : toSafeString(arg);
const renderElement = ({ tag, props: { html, ...props }, children }) => isSelfClosing(tag)
    ? `<${tag}${renderProps(props)}>`
    : `<${tag}${renderProps(props)}>${html || renderChildren(children)}</${tag}>`;
export const render = (arg) => isElement(arg)
    ? renderElement(arg)
    : renderChildren(arg);
