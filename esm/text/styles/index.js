import { replace, str, re_AZ, re_az, re_aZ, re_fw, re_09, idx, idx_az, idx_09 } from './util';
import * as fractur from './fractur';
import * as script from './script';
import * as serif from './serif';
import * as sansSerif from './sans-serif';
export const fullwidth = replace([re_fw, chr => str(0xfee0 + idx(chr))]);
export const regional = replace([re_aZ, chr => str(0x1f1e6 + idx_az(chr))]);
export const monospace = replace([re_AZ, chr => str(0x1d670 + idx_az(chr))], [re_az, chr => str(0x1d68a + idx_az(chr))], [re_09, chr => str(0x1d7f6 + idx_09(chr))]);
export const doubleStruck = replace([re_AZ, chr => str(0x1d538 + idx_az(chr))], [re_az, chr => str(0x1d552 + idx_az(chr))], [re_09, chr => str(0x1d7d8 + idx_09(chr))]);
export { fractur, script, serif, sansSerif };
