<p align="center">
  <br>
  <img width="400" src="./assets/logo.webp">
  <br>
  <br>
</p>

<h2 align='center'>EASI Packages Antd</h2>

<p align='center'>
一个基于 Vue3.0 及 Ant Design Vue 2.0 封装的基础组件库
</p>
<p align='center'>
国际化：中文 / 英文 / 日文
</p>
<br>

[文档地址](https://static.easiglobal.com/easi-packages-antd/0.0.25/website/index.html)

### 开发前置

- 自动生成组件

```
yarn gc 组件名称
```

- 本地开发预览

```
yarn serve
```

- 构建资源

```
yarn build
```

- 安装 root 依赖

```
yarn add -W 依赖名称
```

- 安装组件依赖

```
yarn workspace package add 依赖名称  // 给某个package安装依赖
```

- 预览 MD 文档

```
yarn website
```

### 预装依赖

- [Vue 3+](https://github.com/vuejs/vue-next)
- [Vue Router 4+](https://github.com/vuejs/vue-router-next)
- [ant-design-vue 2+](https://github.com/vueComponent/ant-design-vue)
- [easi-web-utils](https://github.com/infinitasx/easi-web-utils.git#main)

### 按需加载

> webpack 项目

- 安装 babel-plugin-import 依赖

```js
yarn add babel-plugin-import -D
```

- 配置 babel

```js
//babel.config.js
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "easi-packages-antd",
        style: (name) => {
          return `${name}/index.css`;
        },
        customName: (name) => {
          name = name.slice(8);
          return `easi-packages-antd/es/${name}`;
        },
      },
    ],
  ],
};
```

> vite 项目

- 安装 vite-plugin-importer 依赖

```js
yarn add vite-plugin-importer -D
```

- 配置 vite

```js
// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import usePluginImport from "vite-plugin-importer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    usePluginImport({
      libraryName: "easi-packages-antd",
      libraryDirectory: "es",
      style: (name) => {
        return `${name}/index.css`;
      },
      customName: (name) => {
        name = name.slice(8);
        return `easi-packages-antd/es/${name}`;
      },
    }),
  ],
});
```
