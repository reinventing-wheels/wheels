import { Component, Props } from './types'
import { isComponent } from './util'

export const h = (tag: Component<Props> | string, props: any, ...children: any[]): JSX.Element =>
  isComponent(tag)
    ? tag({ children, ...props })
    : { tag, children, props: props || {} }
