<p><strong id="EASILayout" style="font-size: 18px">EASILayout - 布局基础组件</strong></p>

> 此组件是根路由挂载的基础布局组件，包含侧边栏 menu，顶部栏，tab 切换栏，用户自定义抽屉

#### Props

|    props    |         type         |         default         | required | remark                           |
| :---------: | :------------------: | :---------------------: | :------: | -------------------------------- |
|    logo     |        string        |                         |    是    | 系统 Logo 图片                   |
|    title    |        string        |                         |    是    | 系统名称                         |
|  subTitle   |        string        |                         |    否    | 系统二级名称，一般用来放城市名称 |
|     nav     |      NavItem[]       |           []            |    是    | 需要渲染的侧边栏菜单数据         |
|  userInfo   |       UserInfo       |                         |    是    | 用户信息                         |
|  onLogout   | () => `Promise<any>` | () => Promise.resolve() |    是    | 退出登录的方法，返回 Promise     |
| toDashboard |      () => void      |                         |    否    | 跳转到 dashboard 的方法          |

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

|                          name                          | remark                                                    |
| :----------------------------------------------------: | --------------------------------------------------------- |
| onReloadPage( refreshAll: = false ) => `Promise<void>` | 刷新当前页面或刷新 tab 下所有页面缓存，默认只刷新当前页面 |
