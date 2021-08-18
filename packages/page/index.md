<p><strong id="EASIPage" style="font-size: 18px">EASIPage - 页面基础组件</strong></p>

> 此组件是页面级组件的基础组件，每个页面组件都应使用此组件作为基础组件

#### Props

| props        | type        | default     | required      |    remark      |
| :------------: | :-----------: | :-----------: | :-----------: | -------------- |
| hasPermission  |  boolean   |  false  |  否  | 如果传入true，则会跳过此组件IAM页面级别的权限检查 |
| showPageHeader   |  boolean    |  true  |  否  | 是否显示页面的面包屑导航和页面标题，默认是显示 |
| breadcrumb   |  见EASILayout组件内的MenuMeta   |  undefined  |  否  | 自定义面包屑导航，如果IAM系统下发的父子级关系不满足需求，可在此组件传入自定义面包屑导航，优先级高于IAM父子级关系 |
| title  |  string  |    |  否  | 如果IAM下发的页面标题不满足需求，可自定义页面标题，优先级高于IAM下发的标题 |
| desc  |  string  |    |  否  | 页面标题下的描述文案，目前IAM无此字段，如果有需求可传入自定义文案 |
| layoutType  |  card or customer  |  customer  |  否  | 目前UI设计情况下使用默认值即可 |

#### Events

| name         |    remark      |
| :------------: | -------------- |
| initPage  | 用户在有权限的情况下进入页面的回调，需在此传入初始化页面数据的方法，【必传】，不需要再在页面组件的beforeMounted, onMounted, onActivated内调用页面初始化方法，因为无权限时也会进组件的钩子函数 |
