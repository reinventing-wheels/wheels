export const esc = (...colors) => `\x1b[${colors.join(';')}m`;
export const wrap = (end) => (start) => (content) => start + content + end;
