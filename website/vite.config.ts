import { defineConfig } from "vite";
import createDemoPlugin from "./utils/mdToDoc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [createDemoPlugin()],
    root: __dirname,
    server: {
      open: true,
      port: 9000,
    },
    build: {
      outDir: resolve(__dirname, "../dist/website"),
    },
  });
};
