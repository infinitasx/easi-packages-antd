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
yarn add -W -D 依赖名称
```

- 安装组件依赖

```
yarn workspace package add 依赖名称  // 给某个package安装依赖
```

### 预装依赖

- [Vue 3+](https://github.com/vuejs/vue-next)
- [Vue Router 4+](https://github.com/vuejs/vue-router-next)
- [ant-design-vue 2+](https://github.com/vueComponent/ant-design-vue)
- [easi-web-utils](https://github.com/infinitasx/easi-web-utils.git#main)

### 说明导航

- <a href="#UIComponent">UI 组件</a>
  - <a href="#EASIProvider">EASIProvider - 国际化配置根组件</a>
  - <a href="#EASILayout">EASILayout - 布局基础组件</a>
  - <a href="#EASISetting">EASISetting - 用户设置抽屉（如果使用了EASILayout组件则不需要使用此组件）</a>
  - <a href="#EASIPage">EASIPage - 页面基础组件</a>
  - <a href="#EASITable">EASITable - Table 基础组件</a>
  - <a href="#EASIButton">EASIButton - 按钮</a>
  - <a href="#EASIDrawer">EASIDrawer - 抽屉</a>
  - <a href="#EASIModal">EASIModal - 弹框</a>
  - <a href="#EASILoading">EASILoading - 加载中</a>
  - <a href="#EASIError">EASIError - 状态（403，404 等）</a>
- <a href="#Utils">Utils 函数</a>
  - <a href="#useModalVisible">useModalVisible - 控制多个弹框显示/隐藏</a>
  - <a href="#usePagination">usePagination - 通用页码初始化函数</a>
- <a href="#Directives">Directives 指令</a>
  - <a href="#vLoading">v-loading - 显示/隐藏加载效果</a>
  - <a href="#vPermission">v-permission - 权限校验</a>

<br/>
<hr />
<p><strong id="UIComponent" style="font-size: 22px">UI组件</strong></p>
<p><strong id="EASIProvider" style="font-size: 18px">EASIProvider - 国际化配置根组件</strong></p>
> 在App.vue根组件使用，替换ant的config-provider组件

#### Props

与 ant-design-vue v2.2.2 [ConfigProvider 组件](https://2x.antdv.com/components/config-provider-cn) 一致

#### 如何使用

```vue
// 传入国际化文案，与antd-config-provider一致
<EASIProvider :locale="localeMessage">
  <router-view />
</EASIProvider>
```

<hr />

<p><strong id="EASILayout" style="font-size: 18px">EASILayout - 布局基础组件</strong></p>

> 此组件是根路由挂载的基础布局组件，包含侧边栏 menu，顶部栏，tab 切换栏，用户自定义抽屉

#### Props

|    props    |        type        |         default         | required | remark                           |
| :---------: | :----------------: | :---------------------: | :------: | -------------------------------- |
|    logo     |       string       |                         |    是    | 系统 Logo 图片                   |
|    title    |       string       |                         |    是    | 系统名称                         |
|  subTitle   |       string       |                         |    否    | 系统二级名称，一般用来放城市名称 |
|     nav     |     NavItem[]      |           []            |    是    | 需要渲染的侧边栏菜单数据         |
|  userInfo   |      UserInfo      |                         |    是    | 用户信息                         |
|  showTabSetting   |    boolean    |  true  |    否    | 用户信息                         |
|  onLogout   | () => Promise<any> |   |    否   | 退出登录的方法，返回 Promise，不传则不会显示退出登录按钮     |
| toDashboard |     () => void     |                         |    否    | 跳转到 dashboard 的方法，不传则不会显示跳转dashboard按钮  |
| editPassword |     () => void     |                         |    否    | 点击修改密码要执行的方法，不传则不会显示修改密码按钮  |

<strong>NavItem</strong> <br/>

| props |   type   | default | required | remark           |
| :---: | :------: | :-----: | :------: | ---------------- |
| path  |  string  |         |    是    | 菜单对应的路由   |
| name  |  string  |         |    是    | 菜单对应的组件名 |
| meta  | MenuMeta |         |    是    | 菜单的额外信息   |

<strong>MenuMeta</strong> <br/>

|   props    |                          type                          |       default        | required | remark                                                              |
| :--------: | :----------------------------------------------------: | :------------------: | :------: | ------------------------------------------------------------------- |
|   title    |                         string                         |                      |    是    | 菜单名称                                                            |
|    icon    |                         string                         | 'iconfont icon-file' |    是    | 菜单的 icon                                                         |
|   cached   |                        boolean                         |         true         |    否    | 是否缓存组件，应该默认全部缓存，除非有特殊需求，可以传 false        |
| permission |                         string                         |                      |    是    | 菜单对应的权限点                                                    |
| breadcrumb | {name: string, path: string, breadcrumbName: string}[] |          []          |    否    | name: 路由组件名称，path: 路由 path，breadcrumbName: 显示的路由名字 |

<strong>UserInfo</strong> <br/>

| props  |  type  | default | required | remark       |
| :----: | :----: | :-----: | :------: | ------------ |
|  name  | string |         |    是    | 用户名称     |
| avatar | string |         |    否    | 用户头像地址 |

#### Methods

|                         name                         | remark                                                    |
| :--------------------------------------------------: | --------------------------------------------------------- |
| onReloadPage( refreshAll: = false ) => Promise<void> | 刷新当前页面或刷新 tab 下所有页面缓存，默认只刷新当前页面 |

<hr />
<p><strong id="EASIPage" style="font-size: 18px">EASIPage - 页面基础组件</strong></p>

> 此组件是页面级组件的基础组件，每个页面组件都应使用此组件作为基础组件

#### Props

|     props      |              type               |  default  | required | remark                                                                                                               |
| :------------: | :-----------------------------: | :-------: | :------: | -------------------------------------------------------------------------------------------------------------------- |
| hasPermission  |             boolean             |   false   |    否    | 如果传入 true，则会跳过此组件 IAM 页面级别的权限检查                                                                 |
| showPageHeader |             boolean             |   true    |    否    | 是否显示页面的面包屑导航和页面标题，默认是显示                                                                       |
|   breadcrumb   | 见 EASILayout 组件内的 MenuMeta | undefined |    否    | 自定义面包屑导航，如果 IAM 系统下发的父子级关系不满足需求，可在此组件传入自定义面包屑导航，优先级高于 IAM 父子级关系 |
|     title      |             string              |           |    否    | 如果 IAM 下发的页面标题不满足需求，可自定义页面标题，优先级高于 IAM 下发的标题                                       |
|      desc      |             string              |           |    否    | 页面标题下的描述文案，目前 IAM 无此字段，如果有需求可传入自定义文案                                                  |
|   layoutType   |        card or customer         | customer  |    否    | 目前 UI 设计情况下使用默认值即可                                                                                     |

#### Events

|   name   | remark                                                                                                                                                                                          |
| :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initPage | 用户在有权限的情况下进入页面的回调，需在此传入初始化页面数据的方法，【必传】，不需要再在页面组件的 beforeMounted, onMounted, onActivated 内调用页面初始化方法，因为无权限时也会进组件的钩子函数 |

<hr />

<p><strong id="EASISetting" style="font-size: 18px">EASISetting - 用户设置抽屉（如果使用了EASILayout组件则不需要使用此组件）</strong></p>

#### Props

|    props    |        type        |         default         | required | remark                           |
| :---------: | :----------------: | :---------------------: | :------: | -------------------------------- |
|  visible(v-model:)   |      boolean      |       false                  |    是    | 显示/隐藏抽屉   |
|  userInfo   |      UserInfo      |                         |    是    | 用户信息                         |
|  showTabSetting   |    boolean    |  true  |    否    | 用户信息                         |
|  onLogout   | () => Promise<any> |   |    否   | 退出登录的方法，返回 Promise，不传则不会显示退出登录按钮     |
| toDashboard |     () => void     |                         |    否    | 跳转到 dashboard 的方法，不传则不会显示跳转dashboard按钮  |
| editPassword |     () => void     |                         |    否    | 点击修改密码要执行的方法，不传则不会显示修改密码按钮  |


<hr />
<p><strong id="EASITable" style="font-size: 18px">EASITable - Table基础组件</strong></p>

未在下面特别说明的则与 ant-design-vue v2.2.2 [Table 组件](https://2x.antdv.com/components/table-cn) 一致

#### Props

|   props    |       type        |  default  | required | remark                                                                       |
| :--------: | :---------------: | :-------: | :------: | ---------------------------------------------------------------------------- |
| styleClass |      string       |           |    否    | table 顶部标题整行 slot 的 class 名称                                        |
|  loading   |      boolean      |           |    否    | 加载效果                                                                     |
|   scroll   | object or boolean | {x: 1620} |    否    | 默认值考虑的是多列且一定会出现横向滚动的情况，请根据实际情况调整并传入此参数 |

#### Event

与 ant-design-vue v2.2.2 [Table 组件](https://2x.antdv.com/components/table-cn) 一致

#### Slots

未在下面特别说明的则与 ant-design-vue v2.2.2 [Table 组件](https://2x.antdv.com/components/table-cn) 一致

|    name     | remark           |
| :---------: | ---------------- |
| headerLeft  | table 标题       |
| headerRight | table 的操作按钮 |

<hr />
<p><strong id="EASIButton" style="font-size: 18px">EASIButton - 按钮</strong></p>

#### Props

与 ant-design-vue v2.2.2 [Button 组件](https://2x.antdv.com/components/button-cn) 一致

#### Event

与 ant-design-vue v2.2.2 [Button 组件](https://2x.antdv.com/components/button-cn) 一致

<hr />
<p><strong id="EASIDrawer" style="font-size: 18px">EASIDrawer - 抽屉</strong></p>

#### Props

与 ant-design-vue v2.2.2 [Drawer 组件](https://2x.antdv.com/components/drawer-cn) 一致

#### Methods

与 ant-design-vue v2.2.2 [Drawer 组件](https://2x.antdv.com/components/drawer-cn) 一致

#### Slots

|  name   | remark                                 |
| :-----: | -------------------------------------- |
| default | 抽屉内容插槽                           |
| footer  | 抽屉固定在底部的插槽，一般用于放置按钮 |

<hr />
<p><strong id="EASIModal" style="font-size: 18px">EASIModal - 弹框</strong></p>

> 所有的二级页面，如新增/编辑/查看详情等都应放在弹框展示，而不是新开一个 page 页面

#### Props

未在下面特别说明的则与 ant-design-vue v2.2.2 [Modal 组件](https://2x.antdv.com/components/modal-cn) 一致

|   props    |        type        | default | required | remark                                                                                                                                                                                                                             |
| :--------: | :----------------: | :-----: | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   width    |  string or number  |  1000   |    否    | 修改了默认的宽度，一般情况下不需要修改这个参数                                                                                                                                                                                     |
|  handleOk  | () => Promise<any> |         |    否    | 如果没有传入 footer slot，则点击默认 footer 内的确认按钮，会调用此方法，如果此方法状态为 resolve 则会自动关闭弹框，如果为 reject 则不会关闭弹框。传入此方法后确认按钮的 loading 状态在组件内部管理，无需传入 confirmLoading 参数。 |
| autoHeight |      boolean       |  true   |    否    | 是否撑开弹框，如果传入 false，弹框的 body 会有滚动条，弹框不会超过屏幕高度                                                                                                                                                         |
|   footer   |      boolean       |  true   |    否    | 是否显示 footer slot，传入 false 则会隐藏弹框底部的 footer 组件                                                                                                                                                                    |

#### Events

|  name  | remark                               |
| :----: | ------------------------------------ |
|   ok   | 点击确定的回调                       |
| cancel | 点击遮罩层或右上角叉或取消按钮的回调 |
|  show  | 弹框显示的回调                       |

#### Slots

|  name   | remark                                                           |
| :-----: | ---------------------------------------------------------------- |
| default | 弹框内容插槽                                                     |
| footer  | 弹框固定在底部的插槽，一般用于放置按钮，如无特殊需求则不需要传入 |

<hr />
<p><strong id="EASIError" style="font-size: 18px">EASIError - 状态（403，404等）</strong></p>

与 ant-design-vue v2.2.2 [Result 组件](https://2x.antdv.com/components/result-cn) 一致

<hr />
<p><strong id="EASILoading" style="font-size: 18px">EASILoading - 加载中</strong></p>

> 一般情况下请使用 v-loading 指令展示加载状态，而不是通过添加组件的方式

#### Props

|      props      |      type       | default | required | remark                        |
| :-------------: | :-------------: | :-----: | :------: | ----------------------------- |
|     pTitle      |     string      | 加载中  |    否    | 默认为【加载中...】国际化文案 |
| :pShow(v-model) |     boolean     |  true   |    否    | 默认渲染时就会显示            |
|      pSize      | normal or small | normal  |    否    | loading 图标的尺寸大小        |

<br/>
<hr />
<p><strong id="Utils" style="font-size: 22px">Utils函数</strong></p>
<p><strong id="useModalVisible" style="font-size: 18px">useModalVisible - 控制多个弹框显示/隐藏</strong></p>

> 控制多个弹框显示隐藏，可以传入预处理函数

#### 函数类型

```ts
interface InitValue {
  [props: string]: boolean;
}

function useModalVisible(
  initValue: InitValue, // 接受一个初始化对象，初始化各弹框的显示/隐藏状态
  prevAction: (...arg: any[]) => void // 执行set操作前的预处理函数，这里只能获取到setValue入参除key,value之外的参数
): [value: InitValue, setValue: (key: string, value: boolean, ...args: any[]) => void] {}
```

#### 如何使用

```vue
<template>
  <easi-table @handleShowCreateModal="setVisibleModal('showCreateModal', true, $event)" @handleShowUpdateModal="setVisibleModal('showUpdateModal', true, $event)" />

  <create-modal v-model:visible="visibleModal.showCreateModal" :item="currentTableItem" />

  <update-modal v-model:visible="visibleModal.showUpdateModal" :item="currentTableItem" />
</template>

<script lang="ts">
import { ref } from "vue";
import { useModalVisible } from "./lib/index";

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
      }
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
  initValue: Pagination // 接受一个初始化对象，一般只需要传入current, total, pageSize
): Pagination {}
```

#### 如何使用

```vue
<template>
  <easi-table :pagination="pagination" @change="pageChange" />
</template>

<script lang="ts">
import { usePagination } from "./lib/index";

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
// v-permission校验失败会直接移除元素， // 当你只想知道用户是否拥有某个权限时，可使用 $usePermissions(permission: string | string[], all?: 'all' | 'in') => boolean
<template>
  <button v-permission="'singlePermission'">单权限点判断</button>
  <button v-permission="['singlePermission1', 'singlePermission2']">拥有其中一个权限点就通过校验</button>
  <button v-permission:all="['singlePermission1', 'singlePermission2']">拥有所有权限点才能通过校验</button>
  <input type="text" placeholder="无权限不可编辑" :disabled="!$usePermissions('singlePermission')" />
  <input type="text" placeholder="无权限不可编辑" :disabled="!canEdit" />
</template>
<script lang="ts">
import { ref, getCurrentInstance, ComponentInternalInstance } from "vue";
export default {
  setup() {
    const { appContext } = getCurrentInstance() as ComponentInternalInstance;

    return {
      canEdit: appContext.config.globalProperties.$usePermissions(["singlePermission1", "singlePermission2"], "all"),
    };
  },
};
</script>
```
