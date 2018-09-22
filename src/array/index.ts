import { random } from '../math'

export const pick = <T>(items: ArrayLike<T>) =>
  items[items.length * random() | 0]
