# 基础用法

```html
<EASIProvider :locale="zhCN">
    <EASIButton @click="visible = true">打开抽屉</EASIButton>
    <br />
    <EASIDrawer :visible="visible" @close="visible = false" />
</EASIProvider>
```

```js
import { defineComponent, ref } from "vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';
export default defineComponent({
  setup() {
    const visible = ref(false);
    return { visible, zhCN };
  },
});
```
