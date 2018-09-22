export const well = (seed = 1) => {
  const state = [ seed ]
  let a, b, c, d, index = 0

  return () => {
    a = state[index]
    c = state[index + 13 & 15]
    b = a ^ c ^ a<<16 ^ c<<15
    c = state[index + 9 & 15]
    c = c ^ c>>>11
    a = state[index] = b ^ c
    d = a ^ a<<5 & 0xDA442D24
    a = state[index = index + 15 & 15]
    a = a ^ b ^ d ^ a<<2 ^ b<<18 ^ c<<28
    return state[index] = a>>>0
  }
}
