<p><strong id="EASITable" style="font-size: 18px">EASITable - Table基础组件</strong></p>

未在下面特别说明的则与 ant-design-vue v2.2.2 [Table 组件](https://2x.antdv.com/components/table-cn) 一致

```demo
base
```

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
