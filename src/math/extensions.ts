import { EPSILON, PI, E, min, max } from './native'

export type n = number

export const
  TAU = 2 * PI,
  PHI = 5 ** .5 * .5 + .5

export const
  e = E,
  ε = EPSILON,
  π = PI,
  τ = TAU,
  ϕ = PHI

export const
  add = (a: n, b: n) => a + b,
  sub = (a: n, b: n) => a - b,
  mul = (a: n, b: n) => a * b,
  div = (a: n, b: n) => a / b

export const
  clamp = (a: n, b: n, t: n) => min(max(a, t), b),
  lerp  = (a: n, b: n, t: n) => a + t * (b - a),
  norm  = (a: n, b: n, t: n) => (t - a) / (b - a),
  map   = (aʹ: n, bʹ: n, aʺ: n, bʺ: n, t: n) => lerp(aʺ, bʺ, norm(aʹ, bʹ, t))
