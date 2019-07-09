export type B = boolean
export type N = number
export type S = string

export type Fn<T, R> = (arg: T) => R

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
}
