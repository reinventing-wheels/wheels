import { reverseByte, encodeByte, decodeByte } from './util'

export const encode = (input: Iterable<number>) =>
  String.fromCharCode(...Array.from(input, b => encodeByte(reverseByte(b))))

export const decode = (input: string) =>
  Array.from(input, c => reverseByte(decodeByte(c.charCodeAt(0))))
