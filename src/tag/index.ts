export type Tag<A, R, S = ReadonlyArray<string>> = (strings: S, ...args: A[]) => R
export type Map<A, R> = (arg: A) => R

export const mapArgs = <A, Aʹ, R>(fn: Map<Aʹ, A>, tag: Tag<A, R>): Tag<Aʹ, R> =>
  (strings, ...args) => tag(strings, ...args.map(fn))

export const mapStrings = <A, R>(fn: Map<string, any>, tag: Tag<A, R>): Tag<A, R> =>
  (strings, ...args) => tag(strings.map(fn), ...args)

export const mapResult = <A, R, Rʹ>(fn: Map<R, Rʹ>, tag: Tag<A, R>): Tag<A, Rʹ> =>
  (strings, ...args) => fn(tag(strings, ...args))

export const raw = <A, T>(tag: Tag<A, T>): Tag<A, T, TemplateStringsArray> =>
  (strings, ...args) => tag(strings.raw, ...args)

export const tag = <R, A>(fnArg: Map<A, any>, fnStr: Map<string, any>, fnRes: Map<string, R>) =>
  mapResult(fnRes, mapStrings(fnStr, mapArgs(fnArg, identity)))

export const identity: Tag<any, string> = ([ first, ...rest ], ...args) =>
  args.reduce((acc, arg, i) => acc + arg + rest[i], first)
