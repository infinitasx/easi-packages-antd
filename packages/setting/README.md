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
