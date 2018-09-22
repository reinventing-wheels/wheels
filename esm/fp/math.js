import { add as addʹ, mul as mulʹ } from '../math';
import { reduce } from './iter';
export const sum = reduce(addʹ)(0), product = reduce(mulʹ)(0);
export const add = (b) => (a) => a + b, sub = (b) => (a) => a - b, mul = (b) => (a) => a * b, div = (b) => (a) => a / b;
