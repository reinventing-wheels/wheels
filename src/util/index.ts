export const tuple = <T extends [void] | {}>(arr: T) => arr

export const firstNonNull = <T>(...args: (T | null | undefined)[]) => {
  for (const arg of args)
    if (arg != null)
      return arg
}
