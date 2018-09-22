export const joaat = (bytes: ArrayLike<number>) => {
  let hash = 0
  for (let i = 0; i < bytes.length; i++) {
    hash += bytes[i]
    hash += hash << 10
    hash ^= hash >>> 6
  }
  hash += hash << 3
  hash ^= hash >>> 11
  hash += hash << 15
  return hash >>> 0
}
