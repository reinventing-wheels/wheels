import { replace, str, re_AZ, re_az, re_09, idx_az, idx_09 } from './util'

export const regular = replace(
  [re_AZ, chr => str(0x1d5a0 + idx_az(chr))], // 𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹
  [re_az, chr => str(0x1d5ba + idx_az(chr))], // 𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓
  [re_09, chr => str(0x1d7e2 + idx_09(chr))]  // 𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫
)

export const bold = replace(
  [re_AZ, chr => str(0x1d5d4 + idx_az(chr))], // 𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭
  [re_az, chr => str(0x1d5ee + idx_az(chr))], // 𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇
  [re_09, chr => str(0x1d7ec + idx_09(chr))]  // 𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵
)

export const italic = replace(
  [re_AZ, chr => str(0x1d608 + idx_az(chr))], // 𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡
  [re_az, chr => str(0x1d622 + idx_az(chr))]  // 𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻
)

export const boldItalic = replace(
  [re_AZ, chr => str(0x1d63c + idx_az(chr))], // 𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕
  [re_az, chr => str(0x1d656 + idx_az(chr))]  // 𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯
)
