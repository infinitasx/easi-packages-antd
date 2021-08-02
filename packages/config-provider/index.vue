<template>
  <a-config-provider :locale="locale" v-bind="$attrs">
    <slot></slot>
  </a-config-provider>
</template>

<script lang="ts">
import {defineComponent, provide, watch, toRefs, PropType} from "vue"
import {createNamespace} from "../utils/create";
import {initProvider} from "../utils/globalProvider";
import {initI18n, langMap} from "../locale";

interface ILocale {
  locale: 'zh-cn' | 'ja' | 'en',
  [props: string]: any,
}

export default defineComponent({
  name: createNamespace('Provider'),
  props: {
    locale: {
      type: Object as PropType<ILocale>,
      default: () => ({
        locale: 'zh-cn'
      })
    }
  },
  setup(props) {
    const { locale } = toRefs(props);
    const globalProvider = initProvider();
    const globalEASILocale = initI18n(props.locale.locale);
    provide('globalProvider', globalProvider);
    provide('globalEASILocale', globalEASILocale);

    watch(() => locale.value.locale, (newVal) => {
      globalEASILocale.message = langMap[newVal];
    })
  },
})
</script>

<style lang="scss" scoped>

</style>
