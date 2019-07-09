const mapObject = (obj: Object, fn: Function) => {
  const proto = Object.getPrototypeOf(obj)
  const props = Object.getOwnPropertyDescriptors(obj)
  for (const key in props)
    props[key].value = fn(props[key].value)
  return Object.create(proto, props)
}

export const deepCopy = <T>(arg: T): T =>
  typeof arg === 'object' && arg !== null
    ? Array.isArray(arg)
      ? arg.map(deepCopy)
      : mapObject(arg, deepCopy)
    : arg
