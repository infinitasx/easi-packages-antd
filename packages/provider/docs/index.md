<p><strong id="EASIProvider" style="font-size: 18px">EASIProvider - 全局配置</strong></p>

#### Props

与 ant-design-vue v2.2.2 [ConfigProvider 组件](https://2x.antdv.com/components/config-provider-cn) 一致

|     props     |      type       | default | required | remark                        |
| :-----------: | :-------------: | :-----: | :------: | ----------------------------- |
|  waterMarker  |   IWaterMarker  |         |    否    | 需要显示水印的额外信息 |


```ts
interface IWaterMarker {
  ip?: string;
  cityName?: string;
  userInfo?: UserInfo; // 与EASILayout及EASISetting组件的userInfo类型一致
}
```

### 注意
1. 凡使用了公共组件库的组件，必须使用此组件替换ant-design-vue的ConfigProvider组件，使用方法一致
2. 只要使用此组件则会强制开启水印，强制展示时间，域名。 可选传入用户信息（如果使用了EASILayout组件或者EASISetting组件，会从组件内获取用户信息，此处可不传），城市名称，IP。
