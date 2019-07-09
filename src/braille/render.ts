export const render = (w: number, h: number, fn: (x: number, y: number) => any) => {
  const lines = []
  for (let y = 0; y < h; y += 4) {
    const line = []
    for (let x = 0; x < w; x += 2) {
      const byte =
        fn(x+0, y+0)<<0 | fn(x+1, y+0)<<3 | // ●₀ ●₃
        fn(x+0, y+1)<<1 | fn(x+1, y+1)<<4 | // ●₁ ●₄
        fn(x+0, y+2)<<2 | fn(x+1, y+2)<<5 | // ●₂ ●₅
        fn(x+0, y+3)<<6 | fn(x+1, y+3)<<7   // ○₆ ○₇
      line.push(0x2800 | byte)
    }
    lines.push(String.fromCharCode(...line))
  }
  return lines.join('\n')
}
