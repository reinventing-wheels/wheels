import { reverseByte, encodeByte, decodeByte } from './util';
export const encode = (input) => String.fromCharCode(...Array.from(input, b => encodeByte(reverseByte(b))));
export const decode = (input) => Array.from(input, c => reverseByte(decodeByte(c.charCodeAt(0))));
