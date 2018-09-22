import { i } from '.'

describe('rgb', () => {
  test('should not overflow', () => {
    expect(i.rgb(0x1ff, 0x1ff, 0x1ff)).toBe(0xffffff)
  })
})
