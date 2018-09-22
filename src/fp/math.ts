import { add as addʹ, mul as mulʹ } from '../math'
import { reduce } from './iter'

export const
  sum     = reduce(addʹ)(0),
  product = reduce(mulʹ)(0)

export const
  add = (b: number) => (a: number) => a + b,
  sub = (b: number) => (a: number) => a - b,
  mul = (b: number) => (a: number) => a * b,
  div = (b: number) => (a: number) => a / b
