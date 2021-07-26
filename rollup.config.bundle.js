import vue from "rollup-plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import scss from "rollup-plugin-scss";
import path from "path";

export default [
  {
    input: path.resolve(__dirname, "packages/easi-packages-antd/index.ts"),
    output: {
      format: "es",
      file: "lib/index.esm.js",
    },
    plugins: [
      json(),
      scss(),
      terser(),
      nodeResolve(),
      vue(),
      typescript({
        tsconfigOverride: {
          include: ["packages/**/*", "typings/vue-shim.d.ts"],
          exclude: ["node_modules"],
        },
        abortOnError: false,
      }),
    ],
    external: ["vue"],
  },
];
