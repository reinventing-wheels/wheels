export const filter = <T>(fn: (arg: T) => boolean) => function* (it: Iterable<T>) {
  for (const value of it)
    if (fn(value))
      yield value
}

export const map = <T, U>(fn: (arg: T) => U) => function* (it: Iterable<T>) {
  for (const value of it)
    yield fn(value)
}

export const reduce = <T, U>(fn: (acc: U, arg: T) => U) => (acc: U) => (it: Iterable<T>) => {
  let accʹ = acc
  for (const value of it)
    accʹ = fn(accʹ, value)
  return accʹ
}

export const range = function* (min: number, max: number, step = 1) {
  for (let number = min; number < max; number += step)
    yield number
}

export const matcher = (re: RegExp) => function* (input: string) {
  for (let match; match = re.exec(input);)
    yield match
}
