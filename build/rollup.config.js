import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import { babel } from '@rollup/plugin-babel';
import { getPackagesSync } from '@lerna/project';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import pkg from '../package.json';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';

const noPrefixFile = /(utils|directives|hooks|locale)/;
const getOutFile = (name, dir = 'lib', isDirPath = false) => {
  const compName = name.split('@easi-packages-antd/')[1];
  if (isDirPath) {
    return `${dir}/${compName}/`;
  }
  return `${dir}/${compName}/index.js`;
};

const inputs = getPackagesSync()
  .map(pkg => pkg.name)
  .filter(name => name.includes(`@${pkg.name}`) && !name.includes('utils'));

export default inputs.map(name => {
  return {
    input: resolve(__dirname, `../packages/${name.split(`@${pkg.name}/`)[1]}/index.ts`),
    output: [
      {
        format: 'es',
        file: getOutFile(name, 'es'),
      },
      {
        format: 'cjs',
        file: getOutFile(name, 'lib'),
        exports: 'named',
      },
    ],
    plugins: [
      json(),
      scss(),
      vue({
        target: 'browser',
        css: false,
      }),
      nodeResolve(),
      image(),
      esbuild(),
      babel({
        exclude: 'node_modules/**', // 只编译源代码
        extensions: ['.ts', '.vue', '.js'],
        babelHelpers: 'bundled',
      }),
      copy({
        targets: [
          {
            src: resolve(
              __dirname,
              `../packages/${name.split(`@${pkg.name}/`)[1]}/*.{png,jpg,jepg,gif,webp}`,
            ),
            dest: [getOutFile(name, 'lib', true), getOutFile(name, 'es', true)],
          },
        ],
        hook: 'writeBundle',
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
  };
});
