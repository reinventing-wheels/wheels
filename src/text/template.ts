export const renderer = (tmpl: string, arg = '$') =>
  new Function(arg, 'return `' + tmpl + '`')

export const render = (tmpl: string, obj: object) =>
  renderer(tmpl, '{' + Object.keys(obj) + '}')(obj)
