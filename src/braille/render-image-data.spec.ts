import { renderImageData } from './render-image-data'

describe('renderImageData', () => {
  it('should work', () => {
    const width = 16
    const height = 4

    const grayscale = Float32Array.of(
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1
    )

    const imageData: ImageData = {
      width,
      height,
      data: new Uint8ClampedArray(width * height << 2)
        .map((_, i) => grayscale[i >> 2] * 0xff)
    }

    const expected = '⠁⠂⠄⡀⠈⠐⠠⢀\n'
    const received = renderImageData(imageData)
    expect(received).toBe(expected)
  })
})
