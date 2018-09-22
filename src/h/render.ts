import { isSelfClosing, isElement, toSafeString } from './util'
import { encode } from '../html'

const shouldPropBeRendered = ([_key, value]: [string, any]) =>
  value !== false && value != null

const renderProp = ([key, value]: [string, any]) =>
  value !== true && value !== ''
    ? ` ${key}="${encode('' + value)}"`
    : ` ${key}`

const renderProps = (props: object) =>
  Object
    .entries(props)
    .filter(shouldPropBeRendered)
    .map(renderProp)
    .join('')

const renderChildren = (arg: any) =>
  Array.isArray(arg)
    ? arg.map(render).join('')
    : toSafeString(arg)

const renderElement = ({ tag, props: { html, ...props }, children }: JSX.Element) =>
  isSelfClosing(tag)
    ? `<${tag}${renderProps(props)}>`
    : `<${tag}${renderProps(props)}>${html || renderChildren(children)}</${tag}>`

export const render = (arg: any): string =>
  isElement(arg)
    ? renderElement(arg)
    : renderChildren(arg)
