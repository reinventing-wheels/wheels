const defaultComparator = <T>(a: T, b: T) =>
  (a as any > b as any) - (a as any < b as any)

export const sortIndicesByValues = <T>(arr: T[], cmp = defaultComparator) =>
  [...arr.keys()].sort((i, j) => cmp(arr[i], arr[j]))
