export const encoder = (alphabet: string[]) => (bytes: Iterable<number>) =>
  convert([...bytes], 0x100, alphabet.length).map(i => alphabet[i]).join('')

export const decoder = (alphabet: string[]) => (chars: Iterable<string>) =>
  convert([...chars].map(c => alphabet.indexOf(c)), alphabet.length, 0x100)

export const convert = (bytes: number[], fromBase: number, toBase: number) => {
  const acc = []
  while (bytes.some(byte => byte > 0))
    acc.push(divmod(bytes, fromBase, toBase))
  return acc.reverse()
}

export const divmod = (bytes: number[], base: number, divisor: number) =>
  bytes.reduce((remainder, byte, i, bytes) => {
    const n = base*remainder + byte
    bytes[i] = Math.floor(n/divisor)
    return n%divisor
  }, 0)
