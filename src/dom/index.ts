import { overwrite } from '../object'

export const context2d = (...attributes: Partial<HTMLCanvasElement>[]) =>
  (...settings: Partial<CanvasRenderingContext2D>[]) =>
    overwrite(element('canvas')(...attributes).getContext('2d')!, ...settings)

export const element = <K extends keyof HTMLElementTagNameMap>(name: K) =>
  (...attributes: Partial<HTMLElementTagNameMap[K]>[]) =>
    overwrite(document.createElement(name), ...attributes)

export const append = (parent: Element) => (...children: Element[]) =>
  children.forEach(child => parent.appendChild(child))

export const prevent = <E extends Event>(fn?: (event: E) => any) =>
  (event: E) => { event.preventDefault(); fn && fn(event) }

export const raf = () =>
  new Promise<number>(resolve => requestAnimationFrame(resolve))
