export const str = String.fromCodePoint

export const idx = (chr: string) => chr.codePointAt(0)!
export const idx_az = (chr: string) => 31 & idx(chr)-1
export const idx_09 = (chr: string) => 15 & idx(chr)

export const re_09 = /[0-9]/g
export const re_az = /[a-z]/g
export const re_AZ = /[A-Z]/g
export const re_aZ = /[a-zA-Z]/g
export const re_fw = /[!-~]/g

export const replace = (...steps: [RegExp, (s: string) => string][]) =>
  (text: string) => steps.reduce((acc, [re, fn]) => acc.replace(re, fn), text)
