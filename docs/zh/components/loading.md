# EASILoading - 加载中

> 一般情况下请使用 v-loading 指令展示加载状态，而不是通过添加组件的方式

:::demo
loading/index
:::

## Props

| props         | type            | default | required | remark                                         |
| :------------ | :-------------- | :------ | :------- | :--------------------------------------------- |
| title         | string          | 加载中  | 否       | 默认为【加载中...】国际化文案 <img width=500/> |
| show(v-model) | boolean         | true    | 否       | 默认渲染时就会显示                             |
| size          | normal or small | normal  | 否       | loading 图标的尺寸大小                         |
