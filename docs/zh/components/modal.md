# EASIModal - 弹框

> 所有的二级页面，如新增/编辑/查看详情等都应放在弹框展示，而不是新开一个 page 页面

:::demo
modal/index
:::

## Props

未在下面特别说明的则与 ant-design-vue v2.2.2 [Modal 组件](https://2x.antdv.com/components/modal-cn) 一致

| props        | type                 | default | required | remark                                                                                                                                           |
|:-------------| :------------------- |:--------| :------- |:-------------------------------------------------------------------------------------------------------------------------------------------------|
| showOk       | boolean              | true    | 否       | 是否显示确认按钮，默认显示                                                                                                                                    |
| showCancel   | boolean              | true    | 否       | 是否显示取消按钮，默认显示                                                                                                                                    |
| width        | string or number     | 1000    | 否       | 修改了默认的宽度，一般情况下不需要修改这个参数                                                                                                                          |
| handleOk     | () => `Promise<any>` |         | 否       | 如果没有传入 footer slot，则点击默认 footer 内的确认按钮，会调用此方法，如果此方法状态为 resolve 则会自动关闭弹框，如果为 reject 则不会关闭弹框。传入此方法后确认按钮的 loading 状态在组件内部管理，无需传入 confirmLoading 参数。 |
| autoHeight   | boolean              | true    | 否       | 是否撑开弹框，如果传入 false，弹框的 body 会有滚动条，弹框不会超过屏幕高度                                                                                                      |
| footer       | boolean              | true    | 否       | 是否显示 footer slot，传入 false 则会隐藏弹框底部的 footer 组件                                                                                                    |
| footerCenter | boolean              | false   | 否       | 默认的底部按钮是否居中，如果是自定义slot footer，则此参数不生效                                                                                                            |
    

## Events

| name   |     |     |     | remark                               |
| :----- | :-- | :-- | :-- | ------------------------------------ |
| ok     |     |     |     | 点击确定的回调                       |
| cancel |     |     |     | 点击遮罩层或右上角叉或取消按钮的回调 |
| show   |     |     |     | 弹框显示的回调                       |

## Slots

| name    |     |     |     | remark                                                           |
| :------ | :-- | :-- | :-- | :--------------------------------------------------------------- |
| default |     |     |     | 弹框内容插槽                                                     |
| title  |     |     |     | 当props中的title为undefined时才会生效 |
| footer  |     |     |     | 弹框固定在底部的插槽，一般用于放置按钮，如无特殊需求则不需要传入 |
