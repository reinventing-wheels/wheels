// tslint:disable:no-default-export
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import merge from 'deepmerge'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH
const globals = {}

const base = {
  input: 'src/index.ts',
  output: {
    globals,
    freeze: false,
    interop: false,
    sourcemap: true
  },
  external: Object.keys(globals)
}

const umd = merge(base, {
  output: {
    format: 'umd',
    file: pkg.browser,
    name: pkg.name
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext',
          sourceMap: true
        }
      }
    })
  ]
})

const min = merge(umd, {
  output: {
    file: pkg.browser.replace(/\w+$/, 'min.$&')
  },
  plugins: [
    terser({
      ecma: 8,
      compress: {
        passes: 2,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true
      }
    })
  ]
})

export default production
  ? [ umd, min ]
  : [ umd ]
