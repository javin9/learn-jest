import path from 'path'
import  { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { DEFAULT_EXTENSIONS } from '@babel/core'

import pkg from './package.json'

const paths = {
  input: path.join(__dirname, '/src/index.ts'),
  output: path.join(__dirname, '/lib'),
}

// rollup 配置项
const rollupConfig = {
  input: paths.input,
  output: [
    {
      file: path.join(paths.output, 'index.js'),
      format: 'cjs',
      name: pkg.name,
    },
    {
      file: path.join(paths.output, 'index.esm.js'),
      format: 'es',
      name: pkg.name,
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({exclude: 'node_modules/**', sourceMap: false}),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
      ],
    }),
  ],
}

export default rollupConfig
