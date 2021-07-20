import { defineConfig } from "vite";
import json from "@rollup/plugin-json";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import html from "vite-plugin-html";
import { resolve } from "path";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    resolve: {
      alias: {
        "@": resolve("./"),
      },
    },
    build: {
      sourcemap: false,
      lib: {
        entry: "packages/index.ts",
        name: "EASI",
        formats: ["cjs", "es"],
        fileName: "index",
      },
      outDir: "dist",
      rollupOptions: {
        external: ["vue", "ant-design-vue", "moment"],
        output: {
          exports: "named",
          globals: {
            vue: "Vue",
            "ant-design-vue": "antd",
            moment: "moment",
          },
        },
        plugins: [json()],
      },
      terserOptions: {
        compress: {
          ecma: 2015,
          drop_console: true,
        },
      },
      commonjsOptions: {
        sourceMap: false,
      },
    },
    plugins: [
      vue(),
      dts({
        exclude: ["node_modules"],
        outputDir: "lib",
        beforeWriteFile(filePath, content) {
          if (filePath.includes("packages")) {
            filePath = filePath.replace(/\/packages\/+/g, "/");
          }
          return { filePath, content };
        },
      }),
      html({
        inject: {
          injectData: {
            title: "EASI packages by antd",
          },
        },
      }),
    ],
  });
};
