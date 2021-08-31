import vue from "rollup-plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import json from "@rollup/plugin-json";
import scss from "rollup-plugin-scss";
import image from "@rollup/plugin-image";
import path from "path";

export default [
  {
    input: path.resolve(__dirname, "../packages/easi-packages-antd/index.ts"),
    output: {
      format: "es",
      file: "lib/index.js",
    },
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
          include: ["packages/**/*", "typings/vue-shim.d.ts"],
          exclude: ["node_modules"],
        },
        abortOnError: true,
        outDir: "./lib",
      }),
    ],
    external: ["vue", "ant-design-vue", "ant-design-vue/dist/antd.css", "moment", "easi-web-utils", "vue-router", "vue-i18n", "connect-google-maps"],
  },
];
