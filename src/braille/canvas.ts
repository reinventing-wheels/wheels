import { encodeByte } from './util'

const encodeLine = (line: Iterable<number>) => Array.from(line, encodeByte)
const renderLine = (line: Iterable<number>) => String.fromCharCode(...encodeLine(line))
const dot = (x: number, y: number) => 1 << ((y&3) | (x&1)<<2)

export type ICanvas = Uint8Array[]
export type ICanvasRender = (canvas: ICanvas) => string
export type ICanvasCreate = (width: number, height: number) => ICanvas
export type ICanvasEdit = (canvas: ICanvas, x: number, y: number) => number
export type ICanvasFill = (canvas: ICanvas, fn: (x: number, y: number) => number) => void

export const render: ICanvasRender = canvas =>
  canvas.map(renderLine).join('\n')

export const create: ICanvasCreate = (width, height) =>
  Array.from(Array(height>>2), () => new Uint8Array(width>>1))

export const toggle: ICanvasEdit = (canvas, x, y) =>
  canvas[y>>2][x>>1] ^= dot(x, y)

export const on: ICanvasEdit = (canvas, x, y) =>
  canvas[y>>2][x>>1] |= dot(x, y)

export const off: ICanvasEdit = (canvas, x, y) =>
  canvas[y>>2][x>>1] &= ~dot(x, y)

export const fill: ICanvasFill = (canvas, fn) => {
  const w = canvas[0].length << 1
  const h = canvas.length << 2
  for (let y = 0; y < h; y += 4)
    for (let x = 0; x < w; x += 2)
      canvas[y>>2][x>>1] =
        fn(x+0, y+0)<<0 | fn(x+1, y+0)<<4 |
        fn(x+0, y+1)<<1 | fn(x+1, y+1)<<5 |
        fn(x+0, y+2)<<2 | fn(x+1, y+2)<<6 |
        fn(x+0, y+3)<<3 | fn(x+1, y+3)<<7
}
