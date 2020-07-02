import { replace, str, re_AZ, re_az, re_09, idx_az, idx_09 } from './util';
export const bold = replace([re_AZ, chr => str(0x1d400 + idx_az(chr))], [re_az, chr => str(0x1d41a + idx_az(chr))], [re_09, chr => str(0x1d7ce + idx_09(chr))]);
export const italic = replace([re_AZ, chr => str(0x1d434 + idx_az(chr))], [re_az, chr => str(0x1d44e + idx_az(chr))]);
export const boldItalic = replace([re_AZ, chr => str(0x1d468 + idx_az(chr))], [re_az, chr => str(0x1d482 + idx_az(chr))]);
