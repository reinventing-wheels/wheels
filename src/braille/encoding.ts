import { map } from '../fp'

export const reverseByte = (b: number) =>
  (b&0x01)<<7 | (b&0x02)<<5 | (b&0x04)<<3 | (b&0x08)<<1 |
  (b&0x10)>>1 | (b&0x20)>>3 | (b&0x40)>>5 | (b&0x80)>>7

export const encodeByte = (b: number) =>
  (b&0x08)<<3 | (b&0x70)>>1 | (b&0x87) | 0x2800

export const decodeByte = (b: number) =>
  (b&0x40)>>3 | (b&0x38)<<1 | (b&0x87)

export const encode = (bytes: Iterable<number>) =>
  String.fromCharCode(...map((b: number) => encodeByte(reverseByte(b)))(bytes))

export const decode = (str: string) =>
  Array.from(str, c => reverseByte(decodeByte(c.charCodeAt(0))))
