import { min, max, lerp } from '../../math'
import * as i from './i'
import * as f from './f'

export const add = (rgbʹ: number, rgbʺ: number) => i.rgb(
  min(i.r(rgbʹ) + i.r(rgbʺ), 0xff),
  min(i.g(rgbʹ) + i.g(rgbʺ), 0xff),
  min(i.b(rgbʹ) + i.b(rgbʺ), 0xff)
)

export const sub = (rgbʹ: number, rgbʺ: number) => i.rgb(
  max(i.r(rgbʹ) - i.r(rgbʺ), 0),
  max(i.g(rgbʹ) - i.g(rgbʺ), 0),
  max(i.b(rgbʹ) - i.b(rgbʺ), 0)
)

export const mul = (rgbʹ: number, rgbʺ: number) => i.rgb(
  f.r(rgbʹ) * i.r(rgbʺ) + .5,
  f.g(rgbʹ) * i.g(rgbʺ) + .5,
  f.b(rgbʹ) * i.b(rgbʺ) + .5
)

export const mix = (rgbʹ: number, rgbʺ: number) => (t: number) => i.rgb(
  lerp(i.r(rgbʹ), i.r(rgbʺ), t),
  lerp(i.g(rgbʹ), i.g(rgbʺ), t),
  lerp(i.b(rgbʹ), i.b(rgbʺ), t)
)
