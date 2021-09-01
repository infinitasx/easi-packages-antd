# 基础用法

```html
<EASIButton @click="visible = true">打开抽屉</EASIButton>
<br />
<EASIDrawer :visible="visible" @close="visible = false" />
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
