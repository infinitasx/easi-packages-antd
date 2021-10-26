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

[文档地址](https://static.melbdelivery.com/easi-packages-antd/0.0.34/website/index.html)

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
      'import',
      {
        libraryName: 'easi-packages-antd',
        style: name => {
          return `${name}/index.css`;
        },
        customName: name => {
          name = name.slice(8);
          return `easi-packages-antd/es/${name}`;
        },
      },
    ],
  ],
};
```

```js
import { createApp } from 'vue';
import App from './App.vue';
// EASIDirectives 指令 按需加载时使用
import { EASIButton, EASIDirectives } from 'easi-packages-antd';
// 工具函数
import EASIUtils from 'easi-packages-antd/es/utils';

createApp(App)
  .use(EASIButton)
  .use(EASIDirectives)
  .mount('#app');
```

> vite 项目

- 安装 vite-plugin-importer 依赖

```js
yarn add vite-plugin-importer -D
```

- 配置 vite

```js
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import usePluginImport from 'vite-plugin-importer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    usePluginImport({
      libraryName: 'easi-packages-antd',
      libraryDirectory: 'es',
      style: name => {
        return `${name}/index.css`;
      },
      customName: name => {
        name = name.slice(8);
        return `easi-packages-antd/es/${name}`;
      },
    }),
  ],
});
```

```js
import { createApp } from 'vue';
import App from './App.vue';
// EASIDirectives 指令 按需加载时使用
import { EASIButton, EASIDirectives } from 'easi-packages-antd';
// 工具函数
import EASIUtils from 'easi-packages-antd/es/utils';

createApp(App)
  .use(EASIButton)
  .use(EASIDirectives)
  .mount('#app');
```

<hr/>

## 函数

<p><strong id="useModalVisible" style="font-size: 18px">useModalVisible - 控制多个弹框显示/隐藏</strong></p>

> 控制多个弹框显示隐藏，可以传入预处理函数

#### 函数类型

```ts

interface InitValue {
  [props: string]: boolean
}

function useModalVisible(
  initValue: InitValue, // 接受一个初始化对象，初始化各弹框的显示/隐藏状态
  prevAction: (...arg: any[]) => void // 执行set操作前的预处理函数，这里只能获取到setValue入参除key,value之外的参数
): [value: InitValue, setValue: (key: string, value: boolean, ...args: any[]) => void] {}

```

#### 如何使用

```vue
<template>
  <easi-table
    @handleShowCreateModal="setVisibleModal('showCreateModal', true, $event)"
    @handleShowUpdateModal="setVisibleModal('showUpdateModal', true, $event)"
  />

  <create-modal v-model:visible="visibleModal.showCreateModal" :item="currentTableItem" />

  <update-modal v-model:visible="visibleModal.showUpdateModal" :item="currentTableItem" />
</template>

<script lang="ts">
import { ref } from 'vue';
import { useModalVisible } from './lib/index';

export default {
  setup() {
    // 模拟table内的某一个row-data，用于传递给弹框组件
    const currentTableItem = ref<any>({});

    const [visibleModal, setVisibleModal] = useModalVisible(
      {
        showCreateModal: false, // 控制创建弹框的显示和隐藏
        showUpdateModal: false, // 控制更新弹框的显示和隐藏
      },
      (item: any) => {
        // 每次显示弹框之前，把子组件冒泡出来的数据传递给currentTableItem
        currentTableItem.value = item || {};
      },
    );

    return {
      visibleModal,
      setVisibleModal,
    };
  },
};
</script>
```

<hr />
<p><strong id="usePagination" style="font-size: 18px">usePagination - 通用页码初始化函数</strong></p>

> 通用的页码初始化函数，返回 ant Pagination 类型的页码数据，主要是为了统一样式，给部分属性默认值

#### 函数类型

```ts
interface Pagination {
  current: number;
  pageSize: number;
  defaultPageSize?: number;
  disabled?: boolean;
  hideOnSinglePage?: boolean;
  itemRender?: (PageRender: PageRender) => VNode | Slots;
  pageSizeOptions?: string[];
  showLessItems?: boolean;
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  showTotal?: (total: number, range: [number, number]) => string;
  simple?: boolean;
  size?: string;
  total: number;
  buildOptionText?: (props: { value: number }) => string;
}
function usePagination(
  initValue: Pagination, // 接受一个初始化对象，一般只需要传入current, total, pageSize
): Pagination {}
```

#### 如何使用

```vue
<template>
  <easi-table :pagination="pagination" @change="pageChange" />
</template>

<script lang="ts">
import { usePagination } from './lib/index';

export default {
  setup() {
    const pagination = usePagination({
      current: 1, // 初始化页码
      pageSize: 20, // 初始化每页条数
      total: 0, // 初始化总条数
    });

    // 页码或每页条数发生变化时，需要赋值并且重新获取table数据
    const pageChange = (_pagination: typeof pagination) => {
      const { current, pageSize } = _pagination;
      pagination.current = current;
      pagination.pageSize = pageSize;

      // ...重新请求数据
    };

    return {
      pagination,
      pageChange,
    };
  },
};
</script>
```

<br/>
<hr />
<p><strong id="Directives" style="font-size: 22px">Directives指令</strong></p>
<p><strong id="vLoading" style="font-size: 18px">v-loading - 显示/隐藏加载效果</strong></p>

> 使用方法：在需要展示加载效果的组件上绑定 v-loading 指令
> true：显示； false：隐藏
> 也可以接受对象，{show: boolean, title: string, size: 'small' | 'normal'}

<p><strong id="vPermission" style="font-size: 18px">v-permission - 权限校验</strong></p>

> 使用方法：将指令绑定在元素上，如果绑定在组件上，组件一定要有根元素
> 传参类型：string | string[]

#### 使用案例

```vue
// v-permission校验失败会直接移除元素， // 当你只想知道用户是否拥有某个权限时，可使用
$usePermissions(permission: string | string[], all?: 'all' | 'in') => boolean
<template>
  <button v-permission="'singlePermission'">单权限点判断</button>
  <button v-permission="['singlePermission1', 'singlePermission2']">
    拥有其中一个权限点就通过校验
  </button>
  <button v-permission:all="['singlePermission1', 'singlePermission2']">
    拥有所有权限点才能通过校验
  </button>
  <input
    type="text"
    placeholder="无权限不可编辑"
    :disabled="!$usePermissions('singlePermission')"
  />
  <input type="text" placeholder="无权限不可编辑" :disabled="!canEdit" />
</template>
<script lang="ts">
import { ref, getCurrentInstance, ComponentInternalInstance } from 'vue';
export default {
  setup() {
    const { appContext } = getCurrentInstance() as ComponentInternalInstance;

    return {
      canEdit: appContext.config.globalProperties.$usePermissions(
        ['singlePermission1', 'singlePermission2'],
        'all',
      ),
    };
  },
};
</script>
```
