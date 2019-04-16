import { imul } from '../math';
const N = 624;
const M = 397;
const MATRIX_A = 0x9908b0df;
const UPPER_MASK = 0x80000000;
const LOWER_MASK = 0x7fffffff;
export const mt = (seed = 1) => {
    const state = new Uint32Array(N);
    for (let n = state[0] = seed, i = 1; i < N; i++)
        n = state[i] = i + imul(n ^= n >>> 30, 0x6C078965);
    let index = N;
    return () => {
        const a = state[index %= N];
        const b = state[(index + 1) % N];
        const c = state[(index + M) % N];
        const d = a & UPPER_MASK | b & LOWER_MASK;
        let n = state[index++] = c ^ d >>> 1 ^ (d & 1 && MATRIX_A);
        n ^= n >>> 11;
        n ^= n << 7 & 0x9D2C5680;
        n ^= n << 15 & 0xEFC60000;
        n ^= n >>> 18;
        return n >>> 0;
    };
};
