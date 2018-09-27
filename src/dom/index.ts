import { overwrite } from '../object'

export type IElement = <N extends keyof HTMLElementTagNameMap>(name: N) =>
  (options?: Partial<HTMLElementTagNameMap[N]>) => HTMLElementTagNameMap[N]

export const element: IElement = name => options =>
  overwrite(document.createElement(name), options!)

export const append = (parent: Element) => (...children: Element[]) =>
  children.forEach(child => parent.appendChild(child))

export const prevent = <E extends Event>(fn?: (event: E) => any) =>
  (event: E) => { event.preventDefault(); fn && fn(event) }

export const frame = () =>
  new Promise(resolve => requestAnimationFrame(resolve))

export const context2d = (options?: Partial<HTMLCanvasElement>) =>
  element('canvas')(options).getContext('2d')!
