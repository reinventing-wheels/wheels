import { encoder, decoder, convert } from '.'

describe('base', () => {
  describe('convert', () => {
    it('should convert from one base to another', () => {
      const src = [0xdead, 0xf00d]
      const dec = convert([...src], 0x10000, 100)
      const hex = convert([...dec], 100, 0x10000)
      expect(dec).toEqual([37, 35, 94, 11, 33])
      expect(hex).toEqual(src)
    })
  })

  describe('encoder/decoder', () => {
    it('should encode and decode', () => {
      const alphabet = [...'qwerty']
      const message = [...Buffer.from('send nudes')]
      const encoded = encoder(alphabet)(message)
      const decoded = decoder(alphabet)(encoded)
      expect(decoded).toEqual(message)
    })
  })
})
