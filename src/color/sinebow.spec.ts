import { sinebow } from './sinebow'

describe('sinebow', () => {
  it.each([
    ['000000',   0,   0,   0], // grayscale
    ['808080',   0,   0,  50],
    ['ffffff',   0,   0, 100],
    ['ff4040',   0, 100,  50], // rainbow
    ['bfbf00',  60, 100,  50],
    ['40ff40', 120, 100,  50],
    ['00bfbf', 180, 100,  50],
    ['4040ff', 240, 100,  50],
    ['bf00bf', 300, 100,  50],
    ['ff4040', 360, 100,  50]
  ])('should return #%s when passed %d, %d%, %d%', (hex, h, s, l) => {
    const received = sinebow(h/360, s/100, l/100)
    const expected = parseInt(hex, 16)
    expect(received).toBe(expected)
  })
})
