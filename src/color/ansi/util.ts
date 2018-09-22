export const esc = (...colors: number[]) =>
  `\x1b[${colors.join(';')}m`

export const wrap = (end: string) => (start: string) =>
  (content: string) => start + content + end
