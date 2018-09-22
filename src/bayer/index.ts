export const at = (x: number, y: number, order: number) => {
  let z = 0
  for (let i = order; i--; x >>= 1, y >>= 1)
    z = (x&1 ^ y&1 | z<<1)<<1 | y&1
  return z + .5
}

export const lut = (order: number) => {
  const size = 1<<order, area = size*size
  const lut = new Float32Array(area)
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++)
      lut[x + y*size] = at(x, y, order) / area
  return (x: number, y: number) => lut[x%size + y%size*size]
}
