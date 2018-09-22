import { min, max } from './native'

const fit = (fn: typeof min | typeof max) =>
  (width: number, height: number) =>
    (widthʹ: number, heightʹ: number) =>
      fn(width/widthʹ, height/heightʹ)

export const contain = fit(min)
export const cover   = fit(max)
