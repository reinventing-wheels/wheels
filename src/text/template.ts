export const renderer = (tmpl: string, arg = '$') =>
  new Function(arg, 'return `' + tmpl + '`')

export const render = (tmpl: string, obj: object, arg = '$') =>
  new Function(arg, '{' + Object.keys(obj) + '}', 'return `' + tmpl + '`')(obj, obj)
