<template>
  <a-config-provider :locale="locale" v-bind="$attrs">
    <slot></slot>
  </a-config-provider>
</template>

<script lang="ts">
import {defineComponent, provide, watch, toRefs, PropType, createApp, App, ComponentPublicInstance} from "vue"
import {createNamespace} from "../utils/create";
import { initProvider } from "../utils/globalProvider";
import {initI18n, ILocale, langMap} from "../locale";
import { IWaterMarker } from '../../typings/antd'
import WaterMarker from './WaterMaker.vue';

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
      default: () => ({})
    },
  },
  setup(props) {
    const { locale, waterMarker } = toRefs(props);
    const globalProvider = initProvider();
    const globalEASILocale = initI18n(props.locale ? props.locale.locale : 'zh-cn');
    provide('globalProvider', globalProvider);
    provide('globalEASILocale', globalEASILocale);

    watch(() => locale.value, (newVal) => {
      globalEASILocale.message = newVal?.locale ? langMap[newVal.locale] : langMap['zh-cn'];
    })
    let observer: any;

    const domain = window?.location.host;
    const _row = Math.ceil(screen.width / 220);
    const _col = Math.ceil(screen.height / 220);
    const totalNumber = _row * _col;

    let app: App;
    let comp: typeof WaterMarker | null;

    const createMarker = () => {
      const dom = document.createElement('div');
      dom.id = 'easi-watermarker-container';
      app = createApp(WaterMarker, {
        domain,
        totalNumber,
        globalProvider: globalProvider
      });

      comp = app.mount(dom) as any;

      (comp as typeof WaterMarker).waterMarker = waterMarker.value;
      document.body.appendChild(dom);
    }

    const obverseFunc = () => {

      const config = { childList: true };

      // 当观察到变动时执行的回调函数
      const callback = async function(mutationsList: MutationRecord[], observer: any) {
        for(const record of mutationsList){
          const removeList = record.removedNodes;
          if(removeList?.length > 0){
            for(const dom of Array.from(removeList)){
              if((dom as Element).getAttribute('id') === 'easi-watermarker-container'){
                app?.unmount();
                comp = null;
                createMarker();
              }
            }
          }
        }
      };

      // 创建一个观察器实例并传入回调函数
      observer = new MutationObserver(callback);

      // 以上述配置开始观察目标节点
      observer.observe(document.body, config);
    }

    console.log(waterMarker.value);

    if(!document.querySelector('#easi-watermarker-container') && waterMarker.value){
      obverseFunc();
      createMarker();
    }

    watch(() => waterMarker.value, () => {
      if(comp) {
        comp.waterMarker = waterMarker.value;
      }
    })

    return {
      domain,
      totalNumber,
    }
  },
  components: {
    WaterMarker
  }
})
</script>

<style lang="scss" scoped>

</style>
