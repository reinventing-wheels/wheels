const defaultComparator = (a, b) => (a > b) - (a < b);
export const sortIndicesByValues = (arr, cmp = defaultComparator) => [...arr.keys()].sort((i, j) => cmp(arr[i], arr[j]));
