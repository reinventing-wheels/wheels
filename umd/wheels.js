(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.wheels = {})));
}(this, (function (exports) { 'use strict';

  const smoothstep = t => t * t * (3 - 2 * t), smootherstep = t => t * t * t * (t * (t * 6 - 15) + 10);
  const linear = t => t, in2 = t => t * t, in3 = t => t * t * t, in4 = t => t * t * t * t, in5 = t => t * t * t * t * t, out2 = t => t * (2 - t), out3 = t => (--t) * t * t + 1, out4 = t => 1 - (--t) * t * t * t, out5 = t => 1 + (--t) * t * t * t * t, inOut2 = t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t, inOut3 = t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1, inOut4 = t => t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t, inOut5 = t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;

  const { abs, acos, acosh, asin, asinh, atan, atan2, atanh, cbrt, ceil, clz32, cos, cosh, exp, expm1, floor, fround, hypot, imul, log, log10, log1p, log2, max, min, pow, random, round, sign, sin, sinh, sqrt, tan, tanh, trunc, E, LN10, LN2, LOG10E, LOG2E, PI, SQRT1_2, SQRT2 } = Math;
  const { isFinite, isInteger, isNaN, isSafeInteger, parseFloat, parseInt, EPSILON, MAX_SAFE_INTEGER, MAX_VALUE, MIN_SAFE_INTEGER, MIN_VALUE, NEGATIVE_INFINITY, POSITIVE_INFINITY } = Number;

  const fit = (fn) => (width, height) => (widthʹ, heightʹ) => fn(width / widthʹ, height / heightʹ);
  const contain = fit(min);
  const cover = fit(max);

  const TAU = 2 * PI, PHI = 5 ** .5 * .5 + .5;
  const e = E, ε = EPSILON, π = PI, τ = TAU, ϕ = PHI;
  const add = (a, b) => a + b, sub = (a, b) => a - b, mul = (a, b) => a * b, div = (a, b) => a / b;
  const clamp = (a, b, t) => min(max(a, t), b), lerp = (a, b, t) => a + t * (b - a), norm = (a, b, t) => (t - a) / (b - a), map = (aʹ, bʹ, aʺ, bʺ, t) => lerp(aʺ, bʺ, norm(aʹ, bʹ, t));

  const pid = (Kp, Ki, Kd, M = Infinity) => {
      let tʹ;
      let eʹ;
      let Σe = 0;
      return (PV, SP, t) => {
          const e$$1 = SP - PV;
          const Δt = t - tʹ || ε;
          const Δe = e$$1 - eʹ || 0;
          tʹ = t;
          eʹ = e$$1;
          Σe = clamp(-M, M, Σe + e$$1 * Δt);
          return Kp * e$$1 + Ki * Σe + Kd * Δe / Δt;
      };
  };



  var index = ({
    smoothstep: smoothstep,
    smootherstep: smootherstep,
    linear: linear,
    in2: in2,
    in3: in3,
    in4: in4,
    in5: in5,
    out2: out2,
    out3: out3,
    out4: out4,
    out5: out5,
    inOut2: inOut2,
    inOut3: inOut3,
    inOut4: inOut4,
    inOut5: inOut5,
    contain: contain,
    cover: cover,
    TAU: TAU,
    PHI: PHI,
    e: e,
    ε: ε,
    π: π,
    τ: τ,
    ϕ: ϕ,
    add: add,
    sub: sub,
    mul: mul,
    div: div,
    clamp: clamp,
    lerp: lerp,
    norm: norm,
    map: map,
    abs: abs,
    acos: acos,
    acosh: acosh,
    asin: asin,
    asinh: asinh,
    atan: atan,
    atan2: atan2,
    atanh: atanh,
    cbrt: cbrt,
    ceil: ceil,
    clz32: clz32,
    cos: cos,
    cosh: cosh,
    exp: exp,
    expm1: expm1,
    floor: floor,
    fround: fround,
    hypot: hypot,
    imul: imul,
    log: log,
    log10: log10,
    log1p: log1p,
    log2: log2,
    max: max,
    min: min,
    pow: pow,
    random: random,
    round: round,
    sign: sign,
    sin: sin,
    sinh: sinh,
    sqrt: sqrt,
    tan: tan,
    tanh: tanh,
    trunc: trunc,
    E: E,
    LN10: LN10,
    LN2: LN2,
    LOG10E: LOG10E,
    LOG2E: LOG2E,
    PI: PI,
    SQRT1_2: SQRT1_2,
    SQRT2: SQRT2,
    isFinite: isFinite,
    isInteger: isInteger,
    isNaN: isNaN,
    isSafeInteger: isSafeInteger,
    parseFloat: parseFloat,
    parseInt: parseInt,
    EPSILON: EPSILON,
    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
    MAX_VALUE: MAX_VALUE,
    MIN_SAFE_INTEGER: MIN_SAFE_INTEGER,
    MIN_VALUE: MIN_VALUE,
    NEGATIVE_INFINITY: NEGATIVE_INFINITY,
    POSITIVE_INFINITY: POSITIVE_INFINITY,
    pid: pid
  });

  const pick = (items) => items[items.length * random() | 0];

  var index$1 = ({
    pick: pick
  });

  const at = (x, y, order) => {
      let z = 0;
      for (let i = order; i--; x >>= 1, y >>= 1)
          z = (x & 1 ^ y & 1 | z << 1) << 1 | y & 1;
      return z + .5;
  };
  const lut = (order) => {
      const size = 1 << order, area = size * size;
      const lut = new Float32Array(area);
      for (let y = 0; y < size; y++)
          for (let x = 0; x < size; x++)
              lut[x + y * size] = at(x, y, order) / area;
      return (x, y) => lut[x % size + y % size * size];
  };

  var index$2 = ({
    at: at,
    lut: lut
  });

  const filter = (fn) => function* (it) {
      for (const value of it)
          if (fn(value))
              yield value;
  };
  const map$1 = (fn) => function* (it) {
      for (const value of it)
          yield fn(value);
  };
  const reduce = (fn) => (acc) => (it) => {
      let accʹ = acc;
      for (const value of it)
          accʹ = fn(accʹ, value);
      return accʹ;
  };
  const range = function* (min, max, step = 1) {
      for (let number = min; number < max; number += step)
          yield number;
  };
  const matcher = (re) => function* (input) {
      for (let match; match = re.exec(input);)
          yield match;
  };

  const not = (predicate) => arg => !predicate(arg);
  const and = (...predicates) => arg => reduce((acc, p) => acc && p(arg))(true)(predicates);
  const or = (...predicates) => arg => reduce((acc, p) => acc || p(arg))(false)(predicates);

  const sum = reduce(add)(0), product = reduce(mul)(0);
  const add$1 = (b) => (a) => a + b, sub$1 = (b) => (a) => a - b, mul$1 = (b) => (a) => a * b, div$1 = (b) => (a) => a / b;



  var index$3 = ({
    filter: filter,
    map: map$1,
    reduce: reduce,
    range: range,
    matcher: matcher,
    not: not,
    and: and,
    or: or,
    sum: sum,
    product: product,
    add: add$1,
    sub: sub$1,
    mul: mul$1,
    div: div$1
  });

  const reverseByte = (b) => (b & 0x01) << 7 | (b & 0x02) << 5 | (b & 0x04) << 3 | (b & 0x08) << 1 |
      (b & 0x10) >> 1 | (b & 0x20) >> 3 | (b & 0x40) >> 5 | (b & 0x80) >> 7;
  const encodeByte = (b) => (b & 0x08) << 3 | (b & 0x70) >> 1 | (b & 0x87) | 0x2800;
  const decodeByte = (b) => (b & 0x40) >> 3 | (b & 0x38) << 1 | (b & 0x87);
  const encode = (bytes) => String.fromCharCode(...map$1((b) => encodeByte(reverseByte(b)))(bytes));
  const decode = (str) => Array.from(str, c => reverseByte(decodeByte(c.charCodeAt(0))));

  var encoding = ({
    reverseByte: reverseByte,
    encodeByte: encodeByte,
    decodeByte: decodeByte,
    encode: encode,
    decode: decode
  });

  const create = (width, height) => Array.from(Array(height >> 2), () => new Uint8Array(width >> 1));
  const toggle = (canvas, x, y) => canvas[y >> 2][x >> 1] ^= 1 << ((y & 3) | (x & 1) << 2);
  const set = (canvas, x, y) => canvas[y >> 2][x >> 1] |= 1 << ((y & 3) | (x & 1) << 2);
  const unset = (canvas, x, y) => canvas[y >> 2][x >> 1] &= ~(1 << ((y & 3) | (x & 1) << 2));
  const render = canvas => canvas.map(line => String.fromCharCode(...Array.from(line, encodeByte))).join('\n');

  var canvas = ({
    create: create,
    toggle: toggle,
    set: set,
    unset: unset,
    render: render
  });

  const R = .212655;
  const G = .715158;
  const B = .072187;

  const lum = (r, g, b) => (R * r + G * g + B * b) / 0xff;
  const rgb = (r, g, b) => (0xff & r) << 16 | (0xff & g) << 8 | (0xff & b);
  const r = (rgb) => 0xff & rgb >> 16;
  const g = (rgb) => 0xff & rgb >> 8;
  const b = (rgb) => 0xff & rgb;

  var i = ({
    lum: lum,
    rgb: rgb,
    r: r,
    g: g,
    b: b
  });

  const charCodes = function* ({ width, height, data }) {
      const xy00 = 0x0 * width, xy10 = 0x4 + xy00, xy01 = 0x4 * width, xy11 = 0x4 + xy01, xy02 = 0x8 * width, xy12 = 0x4 + xy02, xy03 = 0xc * width, xy13 = 0x4 + xy03;
      for (let y = 0; y < height; y += 4) {
          for (let x = 0; x < width; x += 2) {
              const r$$1 = x + y * width << 2, g$$1 = r$$1 | 1, b$$1 = r$$1 | 2;
              const b0 = lum(data[r$$1 + xy00], data[g$$1 + xy00], data[b$$1 + xy00]), b1 = lum(data[r$$1 + xy01], data[g$$1 + xy01], data[b$$1 + xy01]), b2 = lum(data[r$$1 + xy02], data[g$$1 + xy02], data[b$$1 + xy02]), b3 = lum(data[r$$1 + xy03], data[g$$1 + xy03], data[b$$1 + xy03]), b4 = lum(data[r$$1 + xy10], data[g$$1 + xy10], data[b$$1 + xy10]), b5 = lum(data[r$$1 + xy11], data[g$$1 + xy11], data[b$$1 + xy11]), b6 = lum(data[r$$1 + xy12], data[g$$1 + xy12], data[b$$1 + xy12]), b7 = lum(data[r$$1 + xy13], data[g$$1 + xy13], data[b$$1 + xy13]);
              const byte = .5 + b0 << 0 | .5 + b4 << 3 |
                  .5 + b1 << 1 | .5 + b5 << 4 |
                  .5 + b2 << 2 | .5 + b6 << 5 |
                  .5 + b3 << 6 | .5 + b7 << 7;
              yield 10240 | byte;
          }
          yield 10;
      }
  };
  const renderImageData = (imageData) => String.fromCharCode(...charCodes(imageData));



  var index$4 = ({
    canvas: canvas,
    encoding: encoding,
    renderImageData: renderImageData
  });

  const rgb$1 = (srgb) => srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  const srgb = (rgb) => rgb <= 0.0031308 ? rgb * 12.92 : (rgb ** (1 / 2.4)) * 1.055 - 0.055;

  var srgb$1 = ({
    rgb: rgb$1,
    srgb: srgb
  });

  const lum$1 = (r$$1, g$$1, b$$1) => R * r$$1 + G * g$$1 + B * b$$1;
  const rgb$2 = (r$$1, g$$1, b$$1) => rgb(.5 + 0xff * r$$1, .5 + 0xff * g$$1, .5 + 0xff * b$$1);
  const r$1 = (rgb$$1) => r(rgb$$1) / 0xff;
  const g$1 = (rgb$$1) => g(rgb$$1) / 0xff;
  const b$1 = (rgb$$1) => b(rgb$$1) / 0xff;

  var f = ({
    lum: lum$1,
    rgb: rgb$2,
    r: r$1,
    g: g$1,
    b: b$1
  });

  const xyz = (x, y, z) => {
      const cosx = cos(x), sinx = sin(x);
      const r = clamp(0, 1, z + y * (-0.14861 * cosx + +1.78277 * sinx));
      const g = clamp(0, 1, z + y * (-0.29227 * cosx + -0.90649 * sinx));
      const b = clamp(0, 1, z + y * (+1.97294 * cosx));
      return rgb$2(r, g, b);
  };
  const cubehelix = (hʹ = -1 / 6, sʹ = 1, lʹ = 0, hʺ = -5 / 3, sʺ = 1, lʺ = 1) => (t) => {
      const h = hʹ + t * (hʺ - hʹ);
      const s = sʹ + t * (sʺ - sʹ);
      const l = lʹ + t * (lʺ - lʹ);
      return xyz(τ * (h + 1 / 3), .5 * s * l * (1 - l), l);
  };

  const hsl = (h, s, l) => {
      const hʹ = h % 1, sʹ = s * (.5 - abs(.5 - l));
      const r = l + sʹ * clamp(-1, 1, 12 * abs((3 / 3 - hʹ) % 1 - .5) - 3);
      const g = l + sʹ * clamp(-1, 1, 12 * abs((4 / 3 - hʹ) % 1 - .5) - 3);
      const b = l + sʹ * clamp(-1, 1, 12 * abs((5 / 3 - hʹ) % 1 - .5) - 3);
      return rgb$2(r, g, b);
  };

  const add$2 = (rgbʹ, rgbʺ) => rgb(min(r(rgbʹ) + r(rgbʺ), 0xff), min(g(rgbʹ) + g(rgbʺ), 0xff), min(b(rgbʹ) + b(rgbʺ), 0xff));
  const sub$2 = (rgbʹ, rgbʺ) => rgb(max(r(rgbʹ) - r(rgbʺ), 0), max(g(rgbʹ) - g(rgbʺ), 0), max(b(rgbʹ) - b(rgbʺ), 0));
  const mul$2 = (rgbʹ, rgbʺ) => rgb(r$1(rgbʹ) * r(rgbʺ) + .5, g$1(rgbʹ) * g(rgbʺ) + .5, b$1(rgbʹ) * b(rgbʺ) + .5);
  const mix = (rgbʹ, rgbʺ) => (t) => rgb(lerp(r(rgbʹ), r(rgbʺ), t), lerp(g(rgbʹ), g(rgbʺ), t), lerp(b(rgbʹ), b(rgbʺ), t));

  const random$1 = () => floor(random() * 0x1000000);
  const lum$2 = (rgb$$1) => lum(r(rgb$$1), g(rgb$$1), b(rgb$$1));
  const hex = (rgb$$1) => '#' + ('00000' + floor(rgb$$1).toString(16)).slice(-6);

  const sinebow = (h, s, l) => {
      const sʹ = s * (.5 - abs(.5 - l));
      const r = l + sʹ * cos(τ * (0 / 3 - h));
      const g = l + sʹ * cos(τ * (1 / 3 - h));
      const b = l + sʹ * cos(τ * (2 / 3 - h));
      return rgb$2(r, g, b);
  };



  var index$5 = ({
    srgb: srgb$1,
    cubehelix: cubehelix,
    hsl: hsl,
    random: random$1,
    lum: lum$2,
    hex: hex,
    i: i,
    f: f,
    R: R,
    G: G,
    B: B,
    add: add$2,
    sub: sub$2,
    mul: mul$2,
    mix: mix,
    sinebow: sinebow
  });

  const extend = Object.assign;
  const overwrite = extend;
  const copy = (object) => overwrite({}, object);
  const get = (object, path, sep = '.') => path.split(sep).reduce((o, next) => o && o[next], object);
  const proto = (object) => {
      const props = new Set();
      for (let o = object; o && o !== Object.prototype; o = Object.getPrototypeOf(o))
          Object.getOwnPropertyNames(o).forEach(prop => props.add(prop));
      return props;
  };

  var index$6 = ({
    extend: extend,
    overwrite: overwrite,
    copy: copy,
    get: get,
    proto: proto
  });

  const element = name => options => overwrite(document.createElement(name), options);
  const append = (parent) => (...children) => children.forEach(child => parent.appendChild(child));
  const prevent = (fn) => (event) => { event.preventDefault(); fn && fn(event); };
  const frame = () => new Promise(resolve => requestAnimationFrame(resolve));
  const context2d = (options) => element('canvas')(options).getContext('2d');

  var index$7 = ({
    element: element,
    append: append,
    prevent: prevent,
    frame: frame,
    context2d: context2d
  });

  const generic = (polynomial) => (bytes, previous = 0) => {
      let hash = ~previous;
      for (let j, i = 0; i < bytes.length; i++)
          for (hash ^= bytes[i], j = 8; j--;)
              hash = hash >>> 1 ^ (hash & 1 && polynomial);
      return ~hash >>> 0;
  };
  const crc32 = generic(0xEDB88320);
  const crc32c = generic(0x82F63B78);

  const joaat = (bytes) => {
      let hash = 0;
      for (let i = 0; i < bytes.length; i++) {
          hash += bytes[i];
          hash += hash << 10;
          hash ^= hash >>> 6;
      }
      hash += hash << 3;
      hash ^= hash >>> 11;
      hash += hash << 15;
      return hash >>> 0;
  };



  var index$8 = ({
    generic: generic,
    crc32: crc32,
    crc32c: crc32c,
    joaat: joaat
  });

  const doctype = (html) => '<!doctype html>' + html;
  const minify = (html) => html.replace(/\s*(^|$|[<>])\s*/g, '$1');
  const encode$1 = (arg) => arg.replace(/[<>&"]/g, c => `&#${c.charCodeAt(0)};`);

  var index$9 = ({
    doctype: doctype,
    minify: minify,
    encode: encode$1
  });

  const alea = (seed0 = 1, seed1 = 1, seed2 = 1, seed3 = 1) => {
      let x = (seed0 >>> 0) / 0x100000000;
      let y = (seed1 >>> 0) / 0x100000000;
      let z = (seed2 >>> 0) / 0x100000000;
      let w = (seed3 >>> 0);
      return () => {
          const t = 2091639 * x + w / 0x100000000;
          return x = y, y = z, z = t - (w = t | 0);
      };
  };

  const generic$1 = (a, c) => (seed = 1) => {
      let x = seed;
      return () => x = x * a + c >>> 0;
  };
  const lcg = generic$1(1664525, 1013904223);

  const lfsr = (seed0 = 0, seed1 = 0, seed2 = 0, seed3 = 0) => {
      let x = seed0 + 0x02;
      let y = seed1 + 0x08;
      let z = seed2 + 0x10;
      let w = seed3 + 0x80;
      return () => {
          x = (x & 0xFFFFFFFE) << 18 ^ (x ^ x << 6) >>> 13;
          y = (y & 0xFFFFFFF8) << 2 ^ (y ^ y << 2) >>> 27;
          z = (z & 0xFFFFFFF0) << 7 ^ (z ^ z << 13) >>> 21;
          w = (w & 0xFFFFFF80) << 13 ^ (w ^ w << 3) >>> 12;
          return (x ^ y ^ z ^ w) >>> 0;
      };
  };

  const N = 624;
  const M = 397;
  const MATRIX_A = 0x9908b0df;
  const UPPER_MASK = 0x80000000;
  const LOWER_MASK = 0x7fffffff;
  const mt = (seed = 1) => {
      const state = new Uint32Array(N);
      for (let n = state[0] = seed, i = 1; i < N; i++) {
          n = n ^ n >>> 30;
          n = state[i] = i + imul(n, 0x6C078965);
      }
      let index = N;
      return () => {
          const a = state[index %= N];
          const b = state[(index + 1) % N];
          const c = state[(index + M) % N];
          const d = a & UPPER_MASK | b & LOWER_MASK;
          let n = state[index++] = c ^ d >>> 1 ^ (d & 1 && MATRIX_A);
          n ^= n >>> 11;
          n ^= n << 7 & 0x9D2C5680;
          n ^= n << 15 & 0xEFC60000;
          n ^= n >>> 18;
          return n >>> 0;
      };
  };

  const state = (...state) => {
      for (let n = state[0], i = 1; i < 8; i++) {
          n = n ^ n >>> 30;
          n = state[i & 3] ^= i + imul(n, 0x6C078965);
      }
      return state;
  };
  const tmt = (seed = 1, mat1 = 0x8F7011EE, mat2 = 0xFC78FF1F, tmat = 0x3793FDFF) => {
      let [x, y, z, w] = state(seed, mat1, mat2, tmat);
      return () => {
          let n = 0x7FFFFFFF & x ^ y ^ z;
          let m = w;
          n ^= n << 1;
          m ^= m >>> 1 ^ n;
          x = y;
          y = z;
          z = n ^ m << 10;
          w = m;
          y ^= -(m & 1) & mat1;
          z ^= -(m & 1) & mat2;
          m = x + (z >>> 8);
          n = w ^ m;
          n ^= -(m & 1) & tmat;
          return n >>> 0;
      };
  };

  const well = (seed = 1) => {
      const state = [seed];
      let a, b, c, d, index = 0;
      return () => {
          a = state[index];
          c = state[index + 13 & 15];
          b = a ^ c ^ a << 16 ^ c << 15;
          c = state[index + 9 & 15];
          c = c ^ c >>> 11;
          a = state[index] = b ^ c;
          d = a ^ a << 5 & 0xDA442D24;
          a = state[index = index + 15 & 15];
          a = a ^ b ^ d ^ a << 2 ^ b << 18 ^ c << 28;
          return state[index] = a >>> 0;
      };
  };

  const xs1 = (seed = 1) => {
      let x = seed;
      return () => {
          x ^= x << 13;
          x ^= x >>> 17;
          x ^= x << 5;
          return x >>> 0;
      };
  };
  const xs4 = (seed0 = 1, seed1 = 1, seed2 = 1, seed3 = 1) => {
      let x = seed0;
      let y = seed1;
      let z = seed2;
      let w = seed3;
      let t;
      return () => {
          t = x ^ x << 11;
          x = y;
          y = z;
          z = w;
          w = w ^ w >>> 19 ^ t ^ t >>> 8;
          return w >>> 0;
      };
  };



  var index$a = ({
    alea: alea,
    generic: generic$1,
    lcg: lcg,
    lfsr: lfsr,
    mt: mt,
    tmt: tmt,
    well: well,
    xs1: xs1,
    xs4: xs4
  });

  const mapArgs = (fn, tag) => (strings, ...args) => tag(strings, ...args.map(fn));
  const mapStrings = (fn, tag) => (strings, ...args) => tag(strings.map(fn), ...args);
  const mapResult = (fn, tag) => (strings, ...args) => fn(tag(strings, ...args));
  const raw = (tag) => (strings, ...args) => tag(strings.raw, ...args);
  const tag = (fnArg, fnStr, fnRes) => mapResult(fnRes, mapStrings(fnStr, mapArgs(fnArg, identity)));
  const identity = ([first, ...rest], ...args) => args.reduce((acc, arg, i) => acc + arg + rest[i], first);

  var index$b = ({
    mapArgs: mapArgs,
    mapStrings: mapStrings,
    mapResult: mapResult,
    raw: raw,
    tag: tag,
    identity: identity
  });

  const specialChars = /[\\^$.*+?()[\]{}|]/g;
  const escape = (arg) => arg instanceof RegExp
      ? arg.source
      : ('' + arg).replace(specialChars, '\\$&');
  const re = (flags = '') => raw(tag(escape, x => x, re => RegExp(re, flags)));
  const join = (sep) => (flags = '') => (...parts) => RegExp(parts.map(escape).join(sep), flags);
  const and$1 = join('');
  const or$1 = join('|');

  var index$c = ({
    escape: escape,
    re: re,
    join: join,
    and: and$1,
    or: or$1
  });

  const str = String.fromCodePoint;
  const idx = (chr) => chr.codePointAt(0);
  const idx_az = (chr) => 31 & idx(chr) - 1;
  const idx_09 = (chr) => 15 & idx(chr);
  const re_09 = /[0-9]/g;
  const re_az = /[a-z]/g;
  const re_AZ = /[A-Z]/g;
  const re_aZ = /[a-zA-Z]/g;
  const monospace = (text) => text
      .replace(re_09, chr => str(0x1d7f6 + idx_09(chr)))
      .replace(re_az, chr => str(0x1d68a + idx_az(chr)))
      .replace(re_AZ, chr => str(0x1d670 + idx_az(chr)));
  const flags = (text) => text
      .replace(re_aZ, chr => str(0x1f1e6 + idx_az(chr)));

  var fonts = ({
    monospace: monospace,
    flags: flags
  });

  const tag$1 = ([head, ...tail], ...fns) => obj => fns.reduce((acc, fn, i) => acc + fn(obj) + tail[i], head);
  const format = (re) => (tmpl) => (...args) => tmpl.replace(re, (_, path) => get(args, path));
  const brackets = format(/{(.*?)}/g);
  const hashBrackets = format(/#{(.*?)}/g);
  const dollarBrackets = format(/\${(.*?)}/g);
  const doubleBrackets = format(/{{(.*?)}}/g);

  var format$1 = ({
    tag: tag$1,
    format: format,
    brackets: brackets,
    hashBrackets: hashBrackets,
    dollarBrackets: dollarBrackets,
    doubleBrackets: doubleBrackets
  });

  const levenshtein = (a, b) => {
      const vec = new Uint32Array(a.length + 1);
      for (let y = 1; y <= a.length; y++)
          vec[y] = y;
      for (let x = 1; x <= b.length; x++) {
          vec[0] = x;
          for (let last = x - 1, y = 1; y <= a.length; y++) {
              const tmp = vec[y];
              vec[y] = min(vec[y] + 1, vec[y - 1] + 1, last + +(a[y - 1] !== b[x - 1]));
              last = tmp;
          }
      }
      return vec[a.length];
  };

  const spaces = /(?:\n|\t|\p{Z})/ug;
  const unsafe = /(?!\n)(?:\p{Cc}|\p{Cf}|\p{Cn}|\p{Co}|\p{Mn})/ug;
  const sanitize = (text) => text
      .normalize('NFKC')
      .replace(spaces, ' ')
      .replace(unsafe, '');

  const ESCAPE = /\\/;
  const QUOTE = /'|"/;
  const SPACE = /\s/;
  const split = function* (input) {
      let escape = false;
      let quote = null;
      let arg = null;
      for (const char of input) {
          const isEscape = ESCAPE.test(char);
          const isQuote = QUOTE.test(char);
          const isSpace = SPACE.test(char);
          if (!isSpace && arg == null)
              arg = '';
          if (escape) {
              arg += char;
              escape = false;
          }
          else if (isEscape) {
              escape = true;
          }
          else if (isQuote && !quote) {
              quote = char;
          }
          else if (isQuote && quote === char) {
              quote = null;
          }
          else if (isSpace && !quote && arg != null) {
              yield arg;
              arg = null;
          }
          else if (arg != null) {
              arg += char;
          }
      }
      if (escape || quote)
          throw new SyntaxError;
      if (arg != null)
          yield arg;
  };



  var index$d = ({
    fonts: fonts,
    format: format$1,
    levenshtein: levenshtein,
    sanitize: sanitize,
    split: split
  });

  const tuple = (arr) => arr;
  const firstNonNull = (...args) => {
      for (const arg of args)
          if (arg != null)
              return arg;
  };

  var index$e = ({
    tuple: tuple,
    firstNonNull: firstNonNull
  });

  exports.array = index$1;
  exports.bayer = index$2;
  exports.braille = index$4;
  exports.color = index$5;
  exports.dom = index$7;
  exports.fp = index$3;
  exports.hash = index$8;
  exports.html = index$9;
  exports.math = index;
  exports.object = index$6;
  exports.prng = index$a;
  exports.re = index$c;
  exports.tag = index$b;
  exports.text = index$d;
  exports.util = index$e;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=wheels.js.map
