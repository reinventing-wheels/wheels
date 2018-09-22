import { IDither } from './types'

export const dither: IDither = (buffer, width, height) => {
  for (let y = 0, v = height; v--; y++) {
    const v1 = v > 0

    for (let x = 0, u = width; u--; x++) {
      const x1 = x > 0, u1 = u > 0
      const x2 = x > 1, u2 = u > 1

      let i = x + y*width
      const input  = buffer[i]
      const output = buffer[i] = +(input >= 0.5)

      const err1 = (input - output) / 16
      const err2 = 2*err1
      const err3 = 3*err1
      const err4 = 4*err1
      if (u1) buffer[i+1] += err4
      if (u2) buffer[i+2] += err3
      if (v1) {
        i += width
        if (x2) buffer[i-2] += err1
        if (x1) buffer[i-1] += err2
                buffer[i  ] += err3
        if (u1) buffer[i+1] += err2
        if (u2) buffer[i+2] += err1
      }
    }
  }
}
