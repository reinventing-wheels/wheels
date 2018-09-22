import { R, G, B } from './constants'

export const lum = (r: number, g: number, b: number) =>
  (R*r + G*g + B*b) / 0xff

export const rgb = (r: number, g: number, b: number) =>
  (0xff & r)<<16 | (0xff & g)<<8 | (0xff & b)

export const r = (rgb: number) => 0xff & rgb>>16
export const g = (rgb: number) => 0xff & rgb>>8
export const b = (rgb: number) => 0xff & rgb
