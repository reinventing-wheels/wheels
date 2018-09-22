import { map } from '../fp/iter';
export const decodeByte = (n) => (n & 0x01) << 7 | (n & 0x02) << 5 | (n & 0x04) << 3 | (n & 0x08) |
    (n & 0x10) >> 2 | (n & 0x20) >> 4 | (n & 0x40) >> 2 | (n & 0x80) >> 7;
export const encodeByte = (n) => (n & 0x01) << 7 | (n & 0x02) << 4 | (n & 0x04) << 2 | (n & 0x08) |
    (n & 0x10) << 2 | (n & 0x20) >> 3 | (n & 0x40) >> 5 | (n & 0x80) >> 7 | 0x2800;
export const encode = (bytes) => String.fromCharCode(...map(encodeByte)(bytes));
export const decode = (str) => Array.from(str, c => decodeByte(c.charCodeAt(0)));
