export const renderer = (tmpl, arg = '$') => new Function(arg, 'return `' + tmpl + '`');
export const render = (tmpl, obj, arg = '$') => new Function(arg, '{' + Object.keys(obj) + '}', 'return `' + tmpl + '`')(obj, obj);
