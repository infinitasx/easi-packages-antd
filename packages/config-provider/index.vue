<template>
  <slot></slot>
</template>

<script lang="ts">
import {defineComponent, provide, watch, toRefs, PropType} from "vue"
import {createNamespace} from "../utils/create";
import {initProvider} from "../utils/globalProvider";
import {initI18n, langMap, Lang} from "../locale";

export default defineComponent({
  name: createNamespace('Provider'),
  props: {
    lang: {
      type: String as PropType<Lang>,
      default: 'zh'
    }
  },
  setup(props) {
    const { lang } = toRefs(props);
    const globalProvider = initProvider();
    const globalEASILocale = initI18n(props.lang);
    provide('globalProvider', globalProvider);
    provide('globalEASILocale', globalEASILocale);

    watch(() => lang.value, (newVal) => {
      globalEASILocale.message = langMap[newVal];
    })
  },
})
</script>

<style lang="scss" scoped>

</style>
