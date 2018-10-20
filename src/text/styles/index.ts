import { replace, str, re_AZ, re_az, re_aZ, re_fw, re_09, idx, idx_az, idx_09 } from './util'
import * as fractur from './fractur'
import * as script from './script'
import * as serif from './serif'
import * as sansSerif from './sans-serif'

export const fullwidth = replace(
  [re_fw, chr => str(0xfee0 + idx(chr))]
)

export const regional = replace(
  [re_aZ, chr => str(0x1f1e6 + idx_az(chr))]
)

export const monospace = replace(
  [re_AZ, chr => str(0x1d670 + idx_az(chr))], // 𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉
  [re_az, chr => str(0x1d68a + idx_az(chr))], // 𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣
  [re_09, chr => str(0x1d7f6 + idx_09(chr))]  // 𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿
)

export const doubleStruck = replace(
  [re_AZ, chr => str(0x1d538 + idx_az(chr))], // 𝔸𝔹𝔺𝔻𝔼𝔽𝔾𝔿𝕀𝕁𝕂𝕃𝕄𝕅𝕆𝕇𝕈𝕉𝕊𝕋𝕌𝕍𝕎𝕏𝕐𝕑
  [re_az, chr => str(0x1d552 + idx_az(chr))], // 𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫
  [re_09, chr => str(0x1d7d8 + idx_09(chr))]  // 𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡
)

export { fractur, script, serif, sansSerif }
