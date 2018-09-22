const spaces = /(?:\n|\t|\p{Z})/ug
const unsafe = /(?!\n)(?:\p{Cc}|\p{Cf}|\p{Cn}|\p{Co}|\p{Mn})/ug

export const sanitize = (text: string) => text
  .normalize('NFKC')
  .replace(spaces, ' ')
  .replace(unsafe, '')
