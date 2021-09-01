# 基础用法

```html
<EASIProvider :locale="zhCN">
    <EASIUploader :multiple="false"
                  aspectRatio="1*2"
                  authorization="Bearer oqbK3zUv4AN3mpivH9F_UkcR0tmiaDrg0vplbh4tNXM.fHRf0lXLCPjySVxFe65x-T8ArkggSzKQEFWJl5GM_fw"
                  system="iam"
                  @ok="handleOK"
                  @error="handleError"
    >
      <EASIButton>触发上传组件</EASIButton>
    </EASIUploader>
</EASIProvider>
```

```js
import { defineComponent, ref } from "vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';

export default defineComponent({
  setup(){
    return {
      zhCN,
      handleError(err){
        console.log(err)
      },
      handleOK(result){
        console.log(result)
      }
    }
  }
});
```
