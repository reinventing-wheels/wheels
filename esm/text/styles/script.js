import { replace, str, re_AZ, re_az, idx_az } from './util';
export const regular = replace([re_AZ, chr => str(0x1d49c + idx_az(chr))], [re_az, chr => str(0x1d4b6 + idx_az(chr))]);
export const bold = replace([re_AZ, chr => str(0x1d4d0 + idx_az(chr))], [re_az, chr => str(0x1d4ea + idx_az(chr))]);
