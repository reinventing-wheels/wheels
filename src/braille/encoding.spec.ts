import { encode, decode } from './encoding'

describe('encoding', () => {
  const decoded = [1<<7, 1<<6, 1<<5, 1<<4, 1<<3, 1<<2, 1<<1, 1<<0]
  const encoded = '⠁⠂⠄⡀⠈⠐⠠⢀'

  describe('encode', () => {
    it('should encode', () => {
      expect(encode(decoded)).toEqual(encoded)
    })
  })

  describe('decode', () => {
    it('should decode', () => {
      expect(decode(encoded)).toEqual(decoded)
    })
  })
})
