export const doctype = (html) => '<!doctype html>' + html;
export const minify = (html) => html.replace(/\s*(^|$|[<>])\s*/g, '$1');
export const encode = (arg) => arg.replace(/[<>&"]/g, c => `&#${c.charCodeAt(0)};`);
