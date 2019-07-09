import { EPSILON, PI, E, min, max } from './native'
import { N } from '../types'

export const
  TAU = 2 * PI,
  PHI = 5 ** .5 * .5 + .5

export const
  ε = EPSILON,
  e = E,
  π = PI,
  τ = TAU,
  ϕ = PHI

export const
  add = (a: N, b: N) => a + b,
  sub = (a: N, b: N) => a - b,
  mul = (a: N, b: N) => a * b,
  div = (a: N, b: N) => a / b

export const
  clamp = (a: N, b: N, t: N) => min(max(a, t), b),
  lerp  = (a: N, b: N, t: N) => a + t * (b - a),
  norm  = (a: N, b: N, t: N) => (t - a) / (b - a),
  map   = (aʹ: N, bʹ: N, aʺ: N, bʺ: N, t: N) => lerp(aʺ, bʺ, norm(aʹ, bʹ, t))
