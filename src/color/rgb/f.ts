import { r as rʹ, g as gʹ, b as bʹ, rgb as rgbʹ } from './i'
import { R, G, B } from './constants'

export const lum = (r: number, g: number, b: number) =>
  R*r + G*g + B*b

export const rgb = (r: number, g: number, b: number) =>
  rgbʹ(.5 + 0xff*r, .5 + 0xff*g, .5 + 0xff*b)

export const r = (rgb: number) => rʹ(rgb) / 0xff
export const g = (rgb: number) => gʹ(rgb) / 0xff
export const b = (rgb: number) => bʹ(rgb) / 0xff
