export const encoder = (alphabet: string[]) => (input: Iterable<number>) =>
  convert([...input], 0x100, alphabet.length).map(i => alphabet[i]).join('')

export const decoder = (alphabet: string[]) => (input: Iterable<string>) =>
  convert([...input].map(c => alphabet.indexOf(c)), alphabet.length, 0x100)

export const convert = (input: number[], base: number, toBase: number) => {
  const output = []
  while (input.some(n => n > 0)) {
    let remainder = 0
    for (let i = 0; i < input.length; i++) {
      const n = base * remainder + input[i]
      input[i] = n / toBase >>> 0
      remainder = n % toBase
    }
    output.push(remainder)
  }
  return output.reverse()
}
