import { replace, str, re_AZ, re_az, re_09, idx_az, idx_09 } from './util'

export const bold = replace(
  [re_AZ, chr => str(0x1d400 + idx_az(chr))], // 𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙
  [re_az, chr => str(0x1d41a + idx_az(chr))], // 𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳
  [re_09, chr => str(0x1d7ce + idx_09(chr))]  // 𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗
)

export const italic = replace(
  [re_AZ, chr => str(0x1d434 + idx_az(chr))], // 𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍
  [re_az, chr => str(0x1d44e + idx_az(chr))]  // 𝑎𝑏𝑐𝑑𝑒𝑓𝑔𝑕𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧
)

export const boldItalic = replace(
  [re_AZ, chr => str(0x1d468 + idx_az(chr))], // 𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁
  [re_az, chr => str(0x1d482 + idx_az(chr))]  // 𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛
)
