export const lfsr = (seed0 = 0, seed1 = 0, seed2 = 0, seed3 = 0) => {
  let x = seed0 + 0x02
  let y = seed1 + 0x08
  let z = seed2 + 0x10
  let w = seed3 + 0x80

  return () => {
    x = (x & 0xFFFFFFFE) << 18 ^ (x ^ x <<  6) >>> 13
    y = (y & 0xFFFFFFF8) <<  2 ^ (y ^ y <<  2) >>> 27
    z = (z & 0xFFFFFFF0) <<  7 ^ (z ^ z << 13) >>> 21
    w = (w & 0xFFFFFF80) << 13 ^ (w ^ w <<  3) >>> 12
    return (x ^ y ^ z ^ w) >>> 0
  }
}
