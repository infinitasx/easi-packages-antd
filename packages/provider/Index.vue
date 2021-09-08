<template>
  <a-config-provider :locale="locale" v-bind="$attrs">
    <slot></slot>
  </a-config-provider>
</template>

<script lang="ts">
import {defineComponent, provide, watch, toRefs, createApp, PropType, onMounted, onBeforeUnmount, ref, App} from "vue"
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
    const { locale, waterMarker } = toRefs(props);
    const globalProvider = initProvider();
    const globalEASILocale = initI18n(props.locale ? props.locale.locale : 'zh-cn');
    provide('globalProvider', globalProvider);
    provide('globalEASILocale', globalEASILocale);

    watch(() => locale.value, (newVal) => {
      globalEASILocale.message = newVal?.locale ? langMap[newVal.locale] : langMap['zh-cn'];
    })

    const timestamp = ref(moment().format('YYYY-MM-DD HH:mm:ss'));

    const createWaterMarker = () => {
      let markerDom = document.querySelector('#easi-water-marker');
      const body = document.body;
      const domain = window.location.host;
      const _row = Math.ceil(screen.width / 220);
      const _col = Math.ceil(screen.height / 220);
      const totalNumber = _row * _col;
      let marker: any;
      let insertPosition = false;

      const obverse = () => {

        const config = { childList: true };

        // 当观察到变动时执行的回调函数
        const callback = function(mutationsList: MutationRecord[], observer: any) {
          for(const record of mutationsList){
            const removeList = record.removedNodes;
            if(removeList?.length > 0){
              for(const dom of Array.from(removeList)){
                if((dom as Element).getAttribute('id') === 'easi-water-marker'){
                  markerDom = null;
                  _createWaterMarker({ timestamp: timestamp.value, waterMarker: waterMarker.value })
                }
              }
            }
          }
        };

        // 创建一个观察器实例并传入回调函数
        const observer = new MutationObserver(callback);

        // 以上述配置开始观察目标节点
        observer.observe(document.body, config);
      }

      obverse();

      let time: any;

      const refreshTime = () => {
        clearTimeout(time);
        time = setTimeout(() => {
          timestamp.value = moment().format('YYYY-MM-DD HH:mm:ss');
          if(markerDom){
            markerDom.remove();
          }
          refreshTime();
        }, 5000)
      }

      return (options: any) => {
        const { timestamp, waterMarker } = options;
        markerDom = document.createElement('div');
        markerDom.setAttribute('id', 'easi-water-marker');
        const app = createApp(WaterMarker);
        marker = app.mount(markerDom);
        marker.timestamp = timestamp;
        marker.waterMarker = waterMarker;
        marker.totalNumber = totalNumber;
        marker.domain = domain;
        insertPosition ? body.append(markerDom) : body.prepend(markerDom);
        insertPosition = !insertPosition;
        refreshTime();
      }
    }

    const _createWaterMarker = createWaterMarker();

    _createWaterMarker({ timestamp: timestamp.value, waterMarker: waterMarker.value });
  },
  components: {
    WaterMarker
  }
})
</script>

<style lang="scss" scoped>

</style>
