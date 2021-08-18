# 基础 1

按钮的 `type` 分别为 `default`、`primary`、`info`、`success`、`warning` 和 `error`。

```html
<EASIButton>Default</EASIButton>
<EASIButton type="primary">Primary</EASIButton>
<EASIButton type="info">Info</EASIButton>
<EASIButton type="success">Success</EASIButton>
<EASIButton type="warning">Warning</EASIButton>
<EASIButton type="error">Error</EASIButton>
```

```js
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
```

```css
body {
  background: red;
}
```
