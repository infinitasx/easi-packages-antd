# 按钮类型

<p>按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。</p>

<p>按钮有五种不同状态：info、danger、success、warning或都不传入</p>

```html
<EASIProvider :locale="zhCN">
    <div style="margin-bottom: 10px">
      <a-space>
        <EASIButton type="link">link</EASIButton>
        <EASIButton type="text">text</EASIButton>
        <EASIButton type="primary">primary</EASIButton>
        <EASIButton type="ghost">ghost</EASIButton>
        <EASIButton type="dashed">dashed</EASIButton>
        <EASIButton type="default">default</EASIButton>
      </a-space>
    </div>
    <div style="margin-bottom: 10px">
      <a-space>
        <EASIButton type="link" info>link</EASIButton>
        <EASIButton type="text" info>text</EASIButton>
        <EASIButton type="primary" info>primary</EASIButton>
        <EASIButton type="ghost" info>ghost</EASIButton>
        <EASIButton type="dashed" info>dashed</EASIButton>
        <EASIButton type="default" info>default</EASIButton>
      </a-space>
    </div>
    <div style="margin-bottom: 10px">
      <a-space>
        <EASIButton type="link" danger>link</EASIButton>
        <EASIButton type="text" danger>text</EASIButton>
        <EASIButton type="primary" danger>primary</EASIButton>
        <EASIButton type="ghost" danger>ghost</EASIButton>
        <EASIButton type="dashed" danger>dashed</EASIButton>
        <EASIButton type="default" danger>default</EASIButton>
      </a-space>
    </div>
    <div style="margin-bottom: 10px">
      <a-space>
        <EASIButton type="link" success>link</EASIButton>
        <EASIButton type="text" success>text</EASIButton>
        <EASIButton type="primary" success>primary</EASIButton>
        <EASIButton type="ghost" success>ghost</EASIButton>
        <EASIButton type="dashed" success>dashed</EASIButton>
        <EASIButton type="default" success>default</EASIButton>
      </a-space>
    </div>
    <div>
      <a-space>
        <EASIButton type="link" warning>link</EASIButton>
        <EASIButton type="text" warning>text</EASIButton>
        <EASIButton type="primary" warning>primary</EASIButton>
        <EASIButton type="ghost" warning>ghost</EASIButton>
        <EASIButton type="dashed" warning>dashed</EASIButton>
        <EASIButton type="default" warning>default</EASIButton>
      </a-space>
    </div>
</EASIProvider>
```

```js
import { defineComponent, ref } from "vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';
export default defineComponent({
  setup(){
    
    return {
      zhCN
    }
  }
});
```
