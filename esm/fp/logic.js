import { reduce } from './iter';
export const not = (predicate) => arg => !predicate(arg);
export const and = (...predicates) => arg => reduce((acc, p) => acc && p(arg))(true)(predicates);
export const or = (...predicates) => arg => reduce((acc, p) => acc || p(arg))(false)(predicates);
