export const extend: typeof Object.assign = Object.assign

export const overwrite: <T>(target: T, ...sources: Partial<T>[]) => T = extend

export const copy = <T>(object: T) => overwrite({} as T, object)

export const get = (object: any, path: string, sep = '.') =>
  path.split(sep).reduce((o, next) => o && o[next], object)

export const proto = <T>(object: T) => {
  const props = new Set<keyof T | 'constructor'>()
  for (let o = object; o && o !== Object.prototype; o = Object.getPrototypeOf(o))
    Object.getOwnPropertyNames(o).forEach(prop => props.add(prop as any))
  return props
}

export * from './deep-copy'
