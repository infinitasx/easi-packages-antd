# EASILayout - 布局基础组件

> 此组件是根路由挂载的基础布局组件，包含侧边栏 menu，顶部栏，tab 切换栏，用户自定义抽屉

## Props

|      props      |         type         |         default         | required | remark                                                  |
| :-------------: | :------------------: | :---------------------: | :------: | ------------------------------------------------------- |
|      logo       |        string        |                         |    是    | 系统 Logo 图片                                          |
|      title      |        string        |                         |    是    | 系统名称                                                |
|    subTitle     |        string        |                         |    否    | 系统二级名称，一般用来放城市名称                        |
|       nav       |      NavItem[]       |           []            |    是    | 需要渲染的侧边栏菜单数据                                |
|    userInfo     |       UserInfo       |                         |    是    | 用户信息                                                |
| showTabSetting  |       boolean        |          true           |    否    | 是否显示 tab 相关的设置开关，默认显示                   |
| v-model:setting |       boolean        |          false          |    否    | 控制显示 EASISetting 组件（设置抽屉）                   |
|    startYear    |   string or number   |          2021           |    否    | 系统第一次发布的年份，用于在布局组件底部显示 copyright  |
|    onLogout     | () => `Promise<any>` | () => Promise.resolve() |    是    | 退出登录的方法，返回 Promise                            |
|   toDashboard   |      () => void      |                         |    否    | 点击跳转到 dashboard 要执行的函数，不传则不显示跳转按钮 |
|  editPassword   |      () => void      |                         |    否    | 点击修改密码要执行的函数，不传则不显示修改密码按钮      |

> NavItem

| props |   type   |     default      | required | remark           |
| :---: | :------: | :--------------: | :------: | ---------------- |
| path  |  string  | <img width=500/> |    是    | 菜单对应的路由   |
| name  |  string  |                  |    是    | 菜单对应的组件名 |
| meta  | MenuMeta |                  |    是    | 菜单的额外信息   |

> MenuMeta

|   props    |                          type                          |       default        | required | remark                                                              |
| :--------: | :----------------------------------------------------: | :------------------: | :------: | ------------------------------------------------------------------- |
|   title    |                         string                         |                      |    是    | 菜单名称                                                            |
|    icon    |                         string                         | 'iconfont icon-file' |    是    | 菜单的 icon                                                         |
|   cached   |                        boolean                         |         true         |    否    | 是否缓存组件，应该默认全部缓存，除非有特殊需求，可以传 false        |
| permission |                         string                         |                      |    是    | 菜单对应的权限点                                                    |
| breadcrumb | {name: string, path: string, breadcrumbName: string}[] |          []          |    否    | name: 路由组件名称，path: 路由 path，breadcrumbName: 显示的路由名字 |

> UserInfo

|  props  |     type     | default | required | remark                                     |
| :-----: | :----------: | :-----: | :------: | ------------------------------------------ |
|  name   |    string    |         |    是    | 用户名称 <img width=500/>                  |
| avatar  |    string    |         |    否    | 用户头像地址                               |
| devices | DeviceInfo[] |         |    否    | 用户历史登录设备，不存在既不会显示相关内容 |

> DeviceInfo

|    props    |            type             | default | required | remark                      |
| :---------: | :-------------------------: | :-----: | :------: | :-------------------------- |
| device_type | Desktop or Mobile or Tablet |         |    是    | 客户端类型 <img width=500/> |
|     id      |           number            |         |    是    | 数据表 ID                   |
|     ip      |           string            |         |    是    | 登录 IP                     |
|  active_at  |           number            |         |    是    | 时间戳                      |

## 方法

|                          name                          | remark                                                    |
| :----------------------------------------------------: | --------------------------------------------------------- |
| onReloadPage( refreshAll: = false ) => `Promise<void>` | 刷新当前页面或刷新 tab 下所有页面缓存，默认只刷新当前页面 |
