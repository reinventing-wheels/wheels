import { replace, str, re_AZ, re_az, idx_az } from './util';
export const regular = replace([re_AZ, chr => str(0x1d504 + idx_az(chr))], [re_az, chr => str(0x1d51e + idx_az(chr))]);
export const bold = replace([re_AZ, chr => str(0x1d56c + idx_az(chr))], [re_az, chr => str(0x1d586 + idx_az(chr))]);
