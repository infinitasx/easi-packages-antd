import vue from "rollup-plugin-vue";
import scss from "rollup-plugin-scss";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import { getPackagesSync } from "@lerna/project";
import pkg from "./package.json";
import { resolve } from "path";

const noPrefixFile = /(utils|directives|hooks|locale)/;
const getOutFile = (name, dir = "lib") => {
  const compName = name.split("@easi-packages-antd/")[1];
  if (noPrefixFile.test(name)) {
    return `${dir}/${compName}/index.js`;
  }
  return `${dir}/easi-${compName}/index.js`;
};

const inputs = getPackagesSync()
  .map((pkg) => pkg.name)
  .filter((name) => name.includes(`@${pkg.name}`) && !name.includes("utils"));

export default inputs.map((name) => {
  return {
    input: resolve(__dirname, `packages/${name.split(`@${pkg.name}/`)[1]}/index.ts`),
    output: [
      {
        format: "es",
        file: getOutFile(name, "es"),
      },
      {
        format: "cjs",
        file: getOutFile(name, "lib"),
        exports: "named",
      },
    ],
    plugins: [
      scss(),
      vue({
        target: "browser",
        css: false,
      }),
      nodeResolve(),
      esbuild(),
    ],
    external: ["vue"],
  };
});
