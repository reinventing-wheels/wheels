export const renderer = (tmpl, arg = '$') => new Function(arg, 'return `' + tmpl + '`');
export const render = (tmpl, obj) => renderer(tmpl, '{' + Object.keys(obj) + '}')(obj);
