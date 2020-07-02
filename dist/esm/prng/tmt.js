import { imul } from '../math';
const state = (...state) => {
    for (let n = state[0], i = 1; i < 8; i++)
        n = state[i & 3] ^= i + imul(n ^= n >>> 30, 0x6C078965);
    return state;
};
export const tmt = (seed = 1, mat1 = 0x8F7011EE, mat2 = 0xFC78FF1F, tmat = 0x3793FDFF) => {
    let [x, y, z, w] = state(seed, mat1, mat2, tmat);
    return () => {
        let n = 0x7FFFFFFF & x ^ y ^ z;
        let m = w;
        n ^= n << 1;
        m ^= m >>> 1 ^ n;
        x = y;
        y = z;
        z = n ^ m << 10;
        w = m;
        y ^= -(m & 1) & mat1;
        z ^= -(m & 1) & mat2;
        m = x + (z >>> 8);
        n = w ^ m;
        n ^= -(m & 1) & tmat;
        return n >>> 0;
    };
};
