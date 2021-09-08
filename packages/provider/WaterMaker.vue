<template>
  <div class="easi-water-marker fixed top-0 right-0 w-full h-full overflow-hidden">
    <div class="easi-water-marker-item" v-for="item in totalNumber" :key="item">
      <p>{{ waterMarker?.userInfo?.name || globalProvider?.userInfo?.name }}</p>
      <p>{{ mobile }}</p>
      <p>{{ domain }}</p>
      <p v-if="waterMarker?.cityName">{{ waterMarker.cityName }}</p>
      <p v-if="waterMarker?.ip">{{ waterMarker.ip }}</p>
      <p>{{ timestamp }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject, computed, ref, toRefs, PropType, onBeforeUnmount} from 'vue';
import { createNamespace } from '../utils/create';
import {defaultProvider, IProvider} from "../utils/globalProvider";
import {IWaterMarker} from "../../typings/antd";

export default defineComponent({
  name: createNamespace('WaterMaker'),
  setup(){
    const globalProvider = inject<IProvider>("globalProvider", {...defaultProvider});

    const timestamp = ref<number>(0);
    const waterMarker = ref<IWaterMarker>({});
    const domain = ref<string | undefined>();
    const totalNumber = ref<number>(0);

    const mobile = computed(() => {
      let m = waterMarker.value?.userInfo?.mobile || globalProvider?.userInfo?.mobile;
      return m ? (`${m.substr(0, m.length / 2 - 1)}****${m.substr(m.length / 2 + 3)}`) : undefined
    })

    return {
      globalProvider,
      mobile,
      totalNumber,
      timestamp,
      domain,
      waterMarker,
    }
  },
});
</script>

<style lang="scss" scoped>
.easi-water-marker{
  padding-top: 20px;
  padding-left: 25px;
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
