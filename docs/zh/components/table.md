# EASITable - Table 基础组件

> 所有的二级页面，如新增/编辑/查看详情等都应放在弹框展示，而不是新开一个 page 页面

:::demo
table/index
:::

## Props

未在下面特别说明的则与 ant-design-vue v2.2.2 [Table 组件](https://2x.antdv.com/components/table-cn) 一致

| props      | type              | default     | required | remark                                                                       |
| :--------- | :---------------- | :---------- | :------- | :--------------------------------------------------------------------------- |
| styleClass | string            | -           | 否       | table 顶部标题整行 slot 的 class 名称                                        |
| loading    | boolean           | -           | 否       | 加载效果                                                                     |
| scroll     | object or boolean | `{x: 1620}` | 否       | 默认值考虑的是多列且一定会出现横向滚动的情况，请根据实际情况调整并传入此参数 |

## Events

与 ant-design-vue v2.2.2 [Table 组件](https://2x.antdv.com/components/table-cn) 一致

| name   |     |     |     | remark                               |
| :----- | :-- | :-- | :-- | :----------------------------------- |
| ok     |     |     |     | 点击确定的回调                       |
| cancel |     |     |     | 点击遮罩层或右上角叉或取消按钮的回调 |
| show   |     |     |     | 弹框显示的回调                       |

## Slots

未在下面特别说明的则与 ant-design-vue v2.2.2 [Table 组件](https://2x.antdv.com/components/table-cn) 一致

| name        |     |     |     | remark           |
| :---------- | :-- | :-- | :-- | :--------------- |
| headerLeft  |     |     |     | table 标题       |
| headerRight |     |     |     | table 的操作按钮 |
