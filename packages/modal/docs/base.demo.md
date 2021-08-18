# 基础用法

```html
<EASIButton @click="visible = true">打开弹窗</EASIButton>
<br />
<EASIModal :visible="visible" title="弹窗标题" @cancel="visible = false">内容</EASIModal>
```

```js
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const visible = ref(false);
    return { visible };
  },
});
```
