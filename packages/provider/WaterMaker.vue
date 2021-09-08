<template>
  <template v-if="showMarker">
    <div class="easi-water-marker-item" v-for="item in totalNumber" :key="item">
      <p>{{ waterMarker?.userInfo?.name || globalProvider?.userInfo?.name }}</p>
      <p>{{ mobile }}</p>
      <p>{{ domain }}</p>
      <p v-if="waterMarker?.cityName">{{ waterMarker.cityName }}</p>
      <p v-if="waterMarker?.ip">{{ waterMarker.ip }}</p>
      <p>{{ timestamp }}</p>
    </div>
  </template>
</template>

<script lang="ts">
import {computed, defineComponent, inject, nextTick, PropType, ref, toRefs, onBeforeUnmount} from 'vue';
import {createNamespace} from '../utils/create';
import { IProvider} from '../utils/globalProvider';
import {IWaterMarker} from "../../typings/antd";
import moment from "moment";

export default defineComponent({
  name: createNamespace('WaterMaker'),
  props: {
    totalNumber: {
      type: Number,
      default: 0
    },
    domain: {
      type: String,
      default: undefined
    },
    globalProvider: {
      type: Object as PropType<IProvider>,
      default: undefined
    }
  },
  setup(props) {
    const {globalProvider} = toRefs(props);

    const waterMarker = ref<IWaterMarker>({});

    const mobile = computed(() => {
      let m = waterMarker.value?.userInfo?.mobile || globalProvider.value?.userInfo?.mobile;
      return m ? (`${m.substr(0, m.length / 2 - 1)}****${m.substr(m.length / 2 + 3)}`) : undefined
    })

    const showMarker = ref<boolean>(true);
    const timestamp = ref<string>(moment().format('YYYY-MM-DD HH:mm:ss'));

    let time: any;
    let refreshTime: Function | null = () => {
      time = setTimeout(async () => {
        timestamp.value = moment().format('YYYY-MM-DD HH:mm:ss');
        showMarker.value = false;
        await nextTick();
        showMarker.value = true;
        refreshTime && refreshTime();
      }, 5000)
    }

    refreshTime && refreshTime();

    onBeforeUnmount(() => {
      refreshTime = null;
      clearTimeout(time);
    })

    return {
      mobile,
      globalProvider,
      timestamp,
      showMarker,
      waterMarker,
    }
  },
});
</script>

<style lang="scss">
#easi-watermarker-container{
  padding-top: 20px;
  padding-left: 25px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  pointer-events: none;
  user-select: none;
  z-index: 19999;
  .easi-water-marker-item{
    width: 220px;
    height: 220px;
    padding: 0 20px;
    text-align: center;
    font-size: 15px;
    transform: rotate(-45deg);
    color: #adadad;
    opacity: 0.12;
  }
}
</style>
