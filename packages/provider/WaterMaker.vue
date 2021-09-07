<template>
  <div class="easi-water-marker fixed top-0 right-0 w-full h-full overflow-hidden">
    <div class="easi-water-marker-item" v-for="item in totalNumber" :key="item">
      <p>{{ waterMarker?.userInfo?.name || globalProvider?.userInfo?.name }}</p>
      <p>{{ waterMarker?.userInfo?.mobile || globalProvider?.userInfo?.mobile }}</p>
      <p>{{ domain }}</p>
      <p v-if="waterMarker?.cityName">{{ waterMarker.cityName }}</p>
      <p v-if="waterMarker?.ip">{{ waterMarker.ip }}</p>
      <p>{{ timestamp }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject, ref, onBeforeUnmount, onMounted, PropType} from 'vue';
import { createNamespace } from '../utils/create';
import {defaultProvider, IProvider} from "../utils/globalProvider";
import {IWaterMarker} from "../../typings/antd";

export default defineComponent({
  name: createNamespace('WaterMaker'),
  props: {
    timestamp: {
      type: String,
      default: undefined
    },
    totalNumber: {
      type: Number,
      default: 0
    },
    domain: {
      type: String,
      default: undefined
    },
    waterMarker: {
      type: Object as PropType<IWaterMarker>,
      default: () => ({})
    }
  },
  setup(){
    const globalProvider = inject<IProvider>("globalProvider", {...defaultProvider});

    return {
      globalProvider,
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
    color: #acacac;
    opacity: 0.2;
  }
}

[data-pro-theme=antdv-pro-theme-dark] {
  .easi-water-marker{
    .easi-water-marker-item{
      color: #313131;
      opacity: 0.8;
    }
  }
}
</style>
