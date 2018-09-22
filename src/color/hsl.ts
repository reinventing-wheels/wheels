import { abs, clamp } from '../math'
import { rgb } from './rgb/f'

export const hsl = (h: number, s: number, l: number) => {
  const hʹ = h%1, sʹ = s*(.5-abs(.5-l))
  const r = l + sʹ*clamp(-1, 1, 12*abs((3/3-hʹ)%1-.5)-3)
  const g = l + sʹ*clamp(-1, 1, 12*abs((4/3-hʹ)%1-.5)-3)
  const b = l + sʹ*clamp(-1, 1, 12*abs((5/3-hʹ)%1-.5)-3)
  return rgb(r, g, b)
}
