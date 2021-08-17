# 基础用法

```html
<EASIButton @click="showLoading">打开Loading</EASIButton>
<br />
<EASILoading :show="show" />
```

```js
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const show = ref(false);
    const showLoading = () => {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 3000);
    };
    return { show, showLoading };
  },
});
```
