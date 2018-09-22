import { EPSILON, PI, E, min, max } from './native';
export const TAU = 2 * PI, PHI = 5 ** .5 * .5 + .5;
export const e = E, ε = EPSILON, π = PI, τ = TAU, ϕ = PHI;
export const add = (a, b) => a + b, sub = (a, b) => a - b, mul = (a, b) => a * b, div = (a, b) => a / b;
export const clamp = (a, b, t) => min(max(a, t), b), lerp = (a, b, t) => a + t * (b - a), norm = (a, b, t) => (t - a) / (b - a), map = (aʹ, bʹ, aʺ, bʺ, t) => lerp(aʺ, bʺ, norm(aʹ, bʹ, t));
