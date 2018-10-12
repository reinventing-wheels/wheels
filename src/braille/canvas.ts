import { encodeByte } from './encoding'

export type ICanvas = Uint8Array[]
export type ICanvasCreate = (width: number, height: number) => ICanvas
export type ICanvasMutate = (canvas: ICanvas, x: number, y: number) => number
export type ICanvasRender = (canvas: ICanvas) => string

export const create: ICanvasCreate = (width, height) =>
  Array.from(Array(height>>2), () => new Uint8Array(width>>1))

export const toggle: ICanvasMutate = (canvas, x, y) =>
  canvas[y>>2][x>>1] ^= 1<<((y&3)|(x&1)<<2)

export const set: ICanvasMutate = (canvas, x, y) =>
  canvas[y>>2][x>>1] |= 1<<((y&3)|(x&1)<<2)

export const unset: ICanvasMutate = (canvas, x, y) =>
  canvas[y>>2][x>>1] &= ~(1<<((y&3)|(x&1)<<2))

export const render: ICanvasRender = canvas =>
  canvas.map(line => String.fromCharCode(...Array.from(line, encodeByte))).join('\n')
