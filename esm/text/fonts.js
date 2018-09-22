const str = String.fromCodePoint;
const idx = (chr) => chr.codePointAt(0);
const idx_az = (chr) => 31 & idx(chr) - 1;
const idx_09 = (chr) => 15 & idx(chr);
const re_09 = /[0-9]/g;
const re_az = /[a-z]/g;
const re_AZ = /[A-Z]/g;
const re_aZ = /[a-zA-Z]/g;
export const monospace = (text) => text
    .replace(re_09, chr => str(0x1d7f6 + idx_09(chr)))
    .replace(re_az, chr => str(0x1d68a + idx_az(chr)))
    .replace(re_AZ, chr => str(0x1d670 + idx_az(chr)));
export const flags = (text) => text
    .replace(re_aZ, chr => str(0x1f1e6 + idx_az(chr)));
