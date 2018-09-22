"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const html_1 = require("../html");
const shouldPropBeRendered = ([_key, value]) => value !== false && value != null;
const renderProp = ([key, value]) => value !== true && value !== ''
    ? ` ${key}="${html_1.encode('' + value)}"`
    : ` ${key}`;
const renderProps = (props) => Object
    .entries(props)
    .filter(shouldPropBeRendered)
    .map(renderProp)
    .join('');
const renderChildren = (arg) => Array.isArray(arg)
    ? arg.map(exports.render).join('')
    : util_1.toSafeString(arg);
const renderElement = ({ tag, props: { html, ...props }, children }) => util_1.isSelfClosing(tag)
    ? `<${tag}${renderProps(props)}>`
    : `<${tag}${renderProps(props)}>${html || renderChildren(children)}</${tag}>`;
exports.render = (arg) => util_1.isElement(arg)
    ? renderElement(arg)
    : renderChildren(arg);
