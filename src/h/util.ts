import { Component, Props } from './types'
import { encode } from '../html'

const selfClosing =
  /^(area|base|br|col|command|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i

export const isSelfClosing = (arg: string) =>
  selfClosing.test(arg)

export const isElement = (arg: any): arg is JSX.Element =>
  arg && arg.tag && arg.children

export const isComponent = (arg: any): arg is Component<Props> =>
  typeof arg === 'function'

export const toSafeString = (arg: any) =>
  arg !== true && arg !== false && arg != null
    ? encode('' + arg)
    : ''
