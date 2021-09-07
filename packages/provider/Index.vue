<template>
  <a-config-provider :locale="locale" v-bind="$attrs">
    <WaterMarker v-if="showWaterMaker" :waterMarker="waterMarker" :timestamp="timestamp" :domain="domain" :total-number="totalNumber" />
    <slot></slot>
    <WaterMarker v-if="!showWaterMaker" :waterMarker="waterMarker" :timestamp="timestamp" :domain="domain" :total-number="totalNumber" />
  </a-config-provider>
</template>

<script lang="ts">
import {defineComponent, provide, watch, toRefs, PropType, onMounted, onBeforeUnmount, ref} from "vue"
import {createNamespace} from "../utils/create";
import {initProvider} from "../utils/globalProvider";
import {initI18n, ILocale, langMap} from "../locale";
import { IWaterMarker } from '../../typings/antd'
import WaterMarker from './WaterMaker.vue';
import moment from "moment";

export default defineComponent({
  name: createNamespace('Provider'),
  props: {
    locale: {
      type: Object as PropType<ILocale>,
      default: () => ({
        locale: 'zh-cn'
      })
    },
    waterMarker: {
      type: Object as PropType<IWaterMarker>,
      default: () => ({})
    },
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

    const timestamp = ref(moment().format('YYYY-MM-DD HH:mm:ss'));

    const totalNumber = ref<number>(0);
    const showWaterMaker = ref<boolean>(false);

    const computedNumber = () => {
      const _row = Math.ceil(screen.width / 220);
      const _col = Math.ceil(screen.height / 220);
      totalNumber.value = _row * _col;
    }

    computedNumber();
    let time: any;
    let refreshTime: Function | null = () => {
      showWaterMaker.value = !showWaterMaker.value;
      time = setTimeout(() => {
        timestamp.value = moment().format('YYYY-MM-DD HH:mm:ss');
        refreshTime && refreshTime();
      }, 5000)
    }

    onMounted(() => {
      refreshTime && refreshTime();
    })

    onBeforeUnmount(() => {
      refreshTime = null;
      clearTimeout(time);
    })

    return {
      globalProvider,
      timestamp,
      totalNumber,
      showWaterMaker,
      domain: window.location.host
    }
  },
  components: {
    WaterMarker
  }
})
</script>

<style lang="scss" scoped>

</style>
