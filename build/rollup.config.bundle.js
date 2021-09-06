import vue from 'rollup-plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import scss from 'rollup-plugin-scss';
import image from '@rollup/plugin-image';
import path from 'path';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import { resolve } from 'path';

export default [
  {
    input: path.resolve(__dirname, '../packages/easi-packages-antd/index.ts'),
    output: [
      {
        format: 'cjs',
        file: 'lib/index.js',
      },
      {
        format: 'es',
        file: 'es/index.js',
      },
    ],
    plugins: [
      image(),
      json(),
      scss(),
      terser(),
      nodeResolve(),
      vue({
        css: false,
      }),
      commonjs(),
      typescript({
        tsconfigOverride: {
          include: ['packages/**/*', 'typings/vue-shim.d.ts'],
          exclude: ['node_modules'],
        },
        abortOnError: true,
      }),
      copy({
        targets: [
          {
            src: resolve(__dirname, `../es/easi-packages-antd/*.ts`),
            dest: resolve(__dirname, '../es/'),
            transform: ctx => {
              return ctx.toString().replace('../theme/index.scss', './index.css');
            },
          },
          {
            src: resolve(__dirname, `../lib/easi-packages-antd/*.ts`),
            dest: resolve(__dirname, '../lib/'),
            transform: ctx => {
              return ctx.toString().replace('../theme/index.scss', './index.css');
            },
          },
        ],
        hook: 'writeBundle',
      }),
      del({
        targets: [
          resolve(__dirname, `../es/easi-packages-antd/`),
          resolve(__dirname, `../lib/easi-packages-antd/`),
        ],
        hook: 'closeBundle',
      }),
    ],
    external: [
      'vue',
      'ant-design-vue',
      'ant-design-vue/dist/antd.css',
      'moment',
      'easi-web-utils',
      'vue-router',
      'vue-i18n',
      'connect-google-maps',
    ],
  },
];
