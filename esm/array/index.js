import { random } from '../math';
export const pick = (items) => items[items.length * random() | 0];
