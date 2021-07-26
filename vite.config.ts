import { defineConfig } from "vite";
import json from "@rollup/plugin-json";
import vue from "@vitejs/plugin-vue";
// import dts from "vite-plugin-dts";
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
        entry: resolve(__dirname, "packages/easi-packages-antd/index.ts"),
        name: "EASI",
        formats: ["cjs", "es"],
        fileName: "index",
      },
      outDir: "dist",
      rollupOptions: {
        external: ["vue", "ant-design-vue", "moment", "easi-web-utils", "vue-router"],
        output: {
          exports: "named",
          globals: {
            vue: "Vue",
            "vue-router": "VueRouter",
            "ant-design-vue": "antd",
            moment: "moment",
            "easi-web-utils": "EASI-Utils",
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
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      // dts({
      //   exclude: ["node_modules"],
      //   outputDir: "lib",
      //   beforeWriteFile(filePath, content) {
      //     if (filePath.includes("packages")) {
      //       if (filePath.includes("easi-packages-antd")) {
      //         filePath = filePath.replace(/\/packages\/easi-packages-antd\/+/g, "/");
      //       } else if (filePath.includes("utils")) {
      //         filePath = filePath.replace(/\/packages\/+/g, "/");
      //       } else {
      //         filePath = filePath.replace(/\/packages\/+/g, "/easi-");
      //       }
      //     }

      //     return { filePath, content };
      //   },
      // }),
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
