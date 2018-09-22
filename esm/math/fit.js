import { min, max } from './native';
const fit = (fn) => (width, height) => (widthʹ, heightʹ) => fn(width / widthʹ, height / heightʹ);
export const contain = fit(min);
export const cover = fit(max);
