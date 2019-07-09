import { Mutable } from '../types'
import { random } from '../math'

export const pick = <T>(items: ArrayLike<T>) =>
  items[items.length * random() | 0]

export const shuffle = <T>(items: Mutable<ArrayLike<T>>): ArrayLike<T> => {
  for (let i = items.length; i > 0;) {
    const j = Math.floor(Math.random() * i--);
    [items[i], items[j]] = [items[j], items[i]]
  }
  return items
}

export * from './sort-indices'
