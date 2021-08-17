import { defineConfig } from "vite";
import createDemoPlugin from "./utils/mdToDoc";
import { resolve } from "path";
import html from "vite-plugin-html";
import semver from "semver";
import { dependencies, version, devDependencies } from "../package.json";

const getVersion = ((dependencies) => (packageName) => {
  if (dependencies[packageName]) {
    return semver.minVersion(dependencies[packageName]);
  } else {
    throw new Error(`not found package: ${packageName}`);
  }
})(Object.assign({}, dependencies, devDependencies));
const prefetch = ["https://cdn.jsdelivr.net", "https://static.easiglobal.com"];

const externalJS = ["vue", "ant-design-vue", "vue-router"],
  cdnJS = [],
  cdnCSS = ["https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.2/dist/antd.min.css", `https://static.easiglobal.com/easi-packages-antd/${version}/style.css`];
externalJS.forEach((item, index) => {
  if (item === "ant-design-vue") {
    return (cdnJS[index] = `https://cdn.jsdelivr.net/npm/${item}@${getVersion(item)}/dist/antd.js`);
  }
  cdnJS[index] = `https://cdn.jsdelivr.net/npm/${item}@${getVersion(item)}`;
});

cdnJS.push(`https://static.easiglobal.com/easi-packages-antd/${version}/index.umd.js`);

// https://vitejs.dev/config/
export default ({ mode }) => {
  const IS_PROD = mode === "production";
  // 自动发布静态资源地址
  const EASI_ASSETS_CDN = process.env.EASI_ASSETS_CDN ? `${process.env.EASI_ASSETS_CDN}/${process.env.npm_package_name}` : "/";

  return defineConfig({
    plugins: [
      createDemoPlugin(),
      html({
        inject: {
          injectData: {
            title: process.env.npm_package_name,
            cdn_js: IS_PROD ? cdnJS : [],
            cdn_css: IS_PROD ? cdnCSS : [],
            prefetch: IS_PROD ? prefetch : [],
            easiCdn: process.env.EASI_ASSETS_CDN ? EASI_ASSETS_CDN + "/" : "/",
            version: process.env.npm_package_version,
            env: EASI_ASSETS_CDN,
            build_info: IS_PROD ? `app-version: ${process.env.npm_package_version} build-date: ${new Date().toLocaleString()}` : "",
          },
        },
      }),
    ],
    root: __dirname,
    server: {
      open: true,
      port: 9000,
    },
    base: "./",
    build: {
      outDir: resolve(__dirname, "../dist/website"),
      rollupOptions: {
        external: [...externalJS, "ant-design-vue/dist/antd.css", "easi-packages-antd"],
        output: {
          format: "iife",
          inlineDynamicImports: true,
          globals: {
            vue: "Vue",
            "vue-router": "VueRouter",
            "ant-design-vue": "antd",
            "ant-design-vue/dist/antd.css": "antd",
            "easi-packages-antd": "EASI",
          },
        },
      },
    },
  });
};
