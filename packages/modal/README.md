<p><strong id="EASIModal" style="font-size: 18px">EASIModal - 弹框</strong></p>

> 所有的二级页面，如新增/编辑/查看详情等都应放在弹框展示，而不是新开一个page页面

#### Props

未在下面特别说明的则与ant-design-vue v2.2.2 [Modal组件](https://2x.antdv.com/components/modal-cn) 一致

| props        | type        | default     | required      |    remark      |
| :------------: | :-----------: | :-----------: | :-----------: | -------------- |
| width  |  string or number   |   1000  |  否  | 修改了默认的宽度，一般情况下不需要修改这个参数 |
| handleOk   |  () => Promise<any>    |        |  否  | 如果没有传入footer slot，则点击默认footer内的确认按钮，会调用此方法，如果此方法状态为resolve则会自动关闭弹框，如果为reject则不会关闭弹框。传入此方法后确认按钮的loading状态在组件内部管理，无需传入confirmLoading参数。 |
| autoHeight  |  boolean  |   true  |  否  | 是否撑开弹框，如果传入false，弹框的body会有滚动条，弹框不会超过屏幕高度 |
| footer  |  boolean  |   true  |  否  | 是否显示footer slot，传入false则会隐藏弹框底部的footer组件 |

#### Events

| name         |    remark      |
| :------------: | -------------- |
| ok  | 点击确定的回调 |
| cancel   | 点击遮罩层或右上角叉或取消按钮的回调 |
| show   | 弹框显示的回调 |

#### Slots

| name         |    remark      |
| :------------: | -------------- |
| default  | 弹框内容插槽 |
| footer   | 弹框固定在底部的插槽，一般用于放置按钮，如无特殊需求则不需要传入 |
