export const factory = (polynomial: number) => (bytes: ArrayLike<number>, previous = 0) => {
  let hash = ~previous
  for (let j, i = 0; i < bytes.length; i++)
    for (hash ^= bytes[i], j = 8; j--;)
      hash = hash>>>1 ^ (hash&1 && polynomial)
  return ~hash >>> 0
}

export const crc32  = factory(0xEDB88320)
export const crc32c = factory(0x82F63B78)
