import { floor, random as randomʹ } from '../../math'
import * as i from './i'
import * as f from './f'

export const random = () =>
  floor(randomʹ() * 0x1000000)

export const lum = (rgb: number) =>
  i.lum(i.r(rgb), i.g(rgb), i.b(rgb))

export const hex = (rgb: number) =>
  '#' + ('00000' + floor(rgb).toString(16)).slice(-6)

export { i, f }
export * from './constants'
export * from './operations'
