import { reduce } from './iter'

export type Predicate<A> = (arg: A) => boolean

export const not = <A>(predicate: Predicate<A>): Predicate<A> =>
  arg => !predicate(arg)

export const and = <A>(...predicates: Predicate<A>[]): Predicate<A> =>
  arg => reduce((acc: boolean, p: Predicate<A>) => acc && p(arg))(true)(predicates)

export const or = <A>(...predicates: Predicate<A>[]): Predicate<A> =>
  arg => reduce((acc: boolean, p: Predicate<A>) => acc || p(arg))(false)(predicates)
