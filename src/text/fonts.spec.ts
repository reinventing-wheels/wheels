import { monospace, flags } from './fonts'

describe('fonts', () => {
  // const Ru = 'Съешь ещё этих мягких французских булок да выпей же чаю.'
  // const RU = Ru.toUpperCase()
  // const ru = Ru.toLowerCase()

  const En = 'Pack my box with five dozen liquor jugs.'
  const EN = En.toUpperCase()
  const en = En.toLowerCase()

  const digits = '0123456789'

  const macro = (fn: any, table: any) => () =>
    it.each(table)('should return %j when passed %j',
      (expected, input) => { expect(fn(input)).toBe(expected) })

  describe('monospace', macro(monospace, [
    ['𝙿𝙰𝙲𝙺 𝙼𝚈 𝙱𝙾𝚇 𝚆𝙸𝚃𝙷 𝙵𝙸𝚅𝙴 𝙳𝙾𝚉𝙴𝙽 𝙻𝙸𝚀𝚄𝙾𝚁 𝙹𝚄𝙶𝚂.', EN],
    ['𝚙𝚊𝚌𝚔 𝚖𝚢 𝚋𝚘𝚡 𝚠𝚒𝚝𝚑 𝚏𝚒𝚟𝚎 𝚍𝚘𝚣𝚎𝚗 𝚕𝚒𝚚𝚞𝚘𝚛 𝚓𝚞𝚐𝚜.', en],
    ['𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿', digits]
  ]))

  describe('flags', macro(flags, [
    ['🇵🇦🇨🇰 🇲🇾 🇧🇴🇽 🇼🇮🇹🇭 🇫🇮🇻🇪 🇩🇴🇿🇪🇳 🇱🇮🇶🇺🇴🇷 🇯🇺🇬🇸.', EN],
    ['🇵🇦🇨🇰 🇲🇾 🇧🇴🇽 🇼🇮🇹🇭 🇫🇮🇻🇪 🇩🇴🇿🇪🇳 🇱🇮🇶🇺🇴🇷 🇯🇺🇬🇸.', en],
    [digits, digits]
  ]))
})
