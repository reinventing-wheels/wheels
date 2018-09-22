export const doctype = (html: string) =>
  '<!doctype html>' + html

export const minify = (html: string) =>
  html.replace(/\s*(^|$|[<>])\s*/g, '$1')

export const encode = (arg: string) =>
  arg.replace(/[<>&"]/g, c => `&#${c.charCodeAt(0)};`)
