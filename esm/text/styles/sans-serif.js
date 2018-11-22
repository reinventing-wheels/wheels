import { replace, str, re_AZ, re_az, re_09, idx_az, idx_09 } from './util';
export const regular = replace([re_AZ, chr => str(0x1d5a0 + idx_az(chr))], [re_az, chr => str(0x1d5ba + idx_az(chr))], [re_09, chr => str(0x1d7e2 + idx_09(chr))]);
export const bold = replace([re_AZ, chr => str(0x1d5d4 + idx_az(chr))], [re_az, chr => str(0x1d5ee + idx_az(chr))], [re_09, chr => str(0x1d7ec + idx_09(chr))]);
export const italic = replace([re_AZ, chr => str(0x1d608 + idx_az(chr))], [re_az, chr => str(0x1d622 + idx_az(chr))]);
export const boldItalic = replace([re_AZ, chr => str(0x1d63c + idx_az(chr))], [re_az, chr => str(0x1d656 + idx_az(chr))]);
