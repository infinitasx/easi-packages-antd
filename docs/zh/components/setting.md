# EASISetting - 用户抽屉组件

> 此组件是点击用户名称显示出来的设置相关内容的抽屉，如果已使用 EASILayout 组件，则不需要再使用此组件。

:::demo
setting/index
:::


## Props

> 未特别说明的与 ant-design-vue Drawer 组件一致

|     props      |         type         |         default         | required | remark                                                  |
| :------------: | :------------------: | :---------------------: | :------: | ------------------------------------------------------- |
|    userInfo    |       UserInfo       |                         |    是    | 用户信息                                                |
| showTabSetting |       boolean        |          true           |    否    | 是否显示 tab 相关的设置开关，默认显示                   |
|    onLogout    | () => `Promise<any>` | () => Promise.resolve() |    是    | 退出登录的方法，返回 Promise                            |
|  toDashboard   |      () => void      |                         |    否    | 点击跳转到 dashboard 要执行的函数，不传则不显示跳转按钮 |
|  editPassword  |      () => void      |                         |    否    | 点击修改密码要执行的函数，不传则不显示修改密码按钮      |
