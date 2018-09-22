import { hsl } from './hsl'

describe('hsl', () => {
  it.each([
    ['000000',   0,   0,   0], // grayscale
    ['808080',   0,   0,  50],
    ['ffffff',   0,   0, 100],
    ['ff0000',   0, 100,  50], // rainbow
    ['ffff00',  60, 100,  50],
    ['00ff00', 120, 100,  50],
    ['00ffff', 180, 100,  50],
    ['0000ff', 240, 100,  50],
    ['ff00ff', 300, 100,  50],
    ['ff0000', 360, 100,  50]
  ])('should return #%s when passed %d, %d%, %d%', (hex, h, s, l) => {
    const received = hsl(h/360, s/100, l/100)
    const expected = parseInt(hex, 16)
    expect(received).toBe(expected)
  })
})
