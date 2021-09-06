import vue from 'rollup-plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import esbuild from 'rollup-plugin-esbuild';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

import { resolve } from 'path';
export default {
  input: resolve('./', 'index.ts'),
  output: [
    {
      format: 'es',
      file: '../../es/directives/index.js',
    },
    {
      format: 'cjs',
      file: '../../lib/directives/index.js',
    },
  ],
  plugins: [
    json(),
    vue({
      target: 'browser',
      css: false,
    }),
    scss(),
    nodeResolve(),
    esbuild(),
    babel({
      exclude: 'node_modules/**', // 只编译源代码
      extensions: ['.ts', '.vue', '.js'],
    }),
    copy({
      targets: [
        {
          src: './*.{png,jpg,jepg,gif,webp}',
          dest: ['../../lib/directives/', '../../es/directives/'],
        },
      ],
      hook: 'writeBundle',
    }),
  ],
};
