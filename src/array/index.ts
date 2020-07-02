import { random } from '../math'

export const pick = <T>(items: ArrayLike<T>) =>
  items[items.length * random() | 0]

export const shuffle = <T>(items: T[]): T[] => {
  for (let i = items.length; i > 0;) {
    const j = Math.floor(Math.random() * i--);
    [items[i], items[j]] = [items[j], items[i]]
  }
  return items
}

export const weighted = <T>(items: [number, T][]) => {
  const total = items.reduce((acc, [w]) => acc + w, 0)
  return () => {
    const r = Math.random() * total
    let acc = 0
    for (const [w, item] of items) {
      if ((acc += w) > r)
        return item
    }
    throw new Error() // unreachable
  }
}

export * from './sort-indices'
