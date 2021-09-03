<template>
  <a-config-provider :locale="locale" v-bind="$attrs">
    <slot></slot>
  </a-config-provider>
</template>

<script lang="ts">
import {defineComponent, provide, watch, toRefs, PropType} from "vue"
import {createNamespace} from "../utils/create";
import {initProvider} from "../utils/globalProvider";
import {initI18n, ILocale, langMap} from "../locale";

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
    const globalEASILocale = initI18n(props.locale ? props.locale.locale : 'zh-cn');
    provide('globalProvider', globalProvider);
    provide('globalEASILocale', globalEASILocale);

    watch(() => locale.value, (newVal) => {
      globalEASILocale.message = newVal?.locale ? langMap[newVal.locale] : langMap['zh-cn'];
    })
  },
})
</script>

<style lang="scss" scoped>

</style>
