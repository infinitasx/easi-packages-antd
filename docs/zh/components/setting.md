# EASISetting - 用户抽屉组件

> 此组件是点击用户名称显示出来的设置相关内容的抽屉，如果已使用 EASILayout 组件，则不需要再使用此组件。

## Example
```vue
<template>
  <EASIProvider :locale="lang === 'zh_CN' ? zhCN : enUS">
    <div>
      <EASIButton link @click="show = true">显示设置抽屉组件</EASIButton>
      <EASISetting v-model:visible="show" :userInfo="{name: '用户昵称'}" :onLogout="onLogout">
        <template #action-render>
          <!--  切换语言  -->
          <a-typography-text strong class="block mb-32"> {{ otherText.title }} </a-typography-text>
          <div class="flex items-center mb-32">
        <span class="flex-1">
          <a-typography-text> {{ otherText.subTitle }} </a-typography-text>
        </span>
            <div>
              <a-select size="small" @change="setLang" :value="lang" style="width: 120px">
                <a-select-option
                    :value="item.lang"
                    :key="item.name"
                    :disabled="item.disabled"
                    v-for="item in langOption"
                >
                  {{ item.flag }}
                  {{ item.name }}
                </a-select-option>
              </a-select>
            </div>
          </div>

          <a-divider />
        </template>
      </EASISetting>
    </div>
  </EASIProvider>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enUS from 'ant-design-vue/es/locale/en_US';
export default defineComponent({
  setup() {
    const show = ref(false);
    const lang = ref('zh_CN');
    const langOption = [
      {
        lang: 'zh_CN',
        flag: '🇨🇳',
        name: '简体中文',
        disabled: false,
      },
      {
        lang: 'en_US',
        flag: '🇺🇸',
        name: 'English',
        disabled: false,
      },
    ];

    const otherText = reactive({
      title: '语言设置',
      subTitle: '当前语言'
    })

    return {
      zhCN,
      enUS,
      show,
      lang,
      langOption,
      otherText,
      onLogout(){
        console.log('你点了退出登录！')
      },
      setLang(val){
        lang.value = val;
        if(val === 'zh_CN'){
          otherText.title = '语言设置';
          otherText.subTitle = '当前语言'
        }else{
          otherText.title = 'Language Settings';
          otherText.subTitle = 'Current Language'
        }
      }
    };
  },
});
</script>

<style>
.table {
  width: 100%;
}
</style>
```


## Props

> 未特别说明的与 ant-design-vue Drawer 组件一致

|     props      |         type         |         default         | required | remark                                                  |
| :------------: | :------------------: | :---------------------: | :------: | ------------------------------------------------------- |
|    userInfo    |       UserInfo       |                         |    是    | 用户信息                                                |
| showTabSetting |       boolean        |          true           |    否    | 是否显示 tab 相关的设置开关，默认显示                   |
|    onLogout    | () => `Promise<any>` | () => Promise.resolve() |    是    | 退出登录的方法，返回 Promise                            |
|  toDashboard   |      () => void      |                         |    否    | 点击跳转到 dashboard 要执行的函数，不传则不显示跳转按钮 |
|  editPassword  |      () => void      |                         |    否    | 点击修改密码要执行的函数，不传则不显示修改密码按钮      |
