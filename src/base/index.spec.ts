import { encoder, decoder } from '.'

describe('base', () => {
  const alpha = [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz']
  const bytes = [...Buffer.from('send nudes')]

  it('should encode and decode', () => {
    const encoded = encoder(alpha)(bytes)
    const decoded = decoder(alpha)(encoded)
    expect(decoded).toEqual(bytes)
  })
})
