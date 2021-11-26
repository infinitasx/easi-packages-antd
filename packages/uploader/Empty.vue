<template>
  <div class="relative w-full h-full flex items-center justify-center">
    <div class="easi-packages-ant-upload ant-upload ant-upload-drag" @click.stop="$emit('clickEmpty')">
      <div role="button" tabindex="0" class="ant-upload ant-upload-btn">
        <div class="ant-upload-drag-container">
          <p class="ant-upload-drag-icon">
          <span role="img" aria-label="picture" class="anticon anticon-picture">
            <svg focusable="false" class=""
                 data-icon="picture" width="1em"
                 height="1em" fill="currentColor"
                 aria-hidden="true"
                 viewBox="64 64 896 896">
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"></path>
            </svg>
          </span>
          </p>
          <p class="ant-upload-text">{{ emptyTitle || getText('uploaderEmptyTitle') }}</p>
          <p class="ant-upload-hint">
            {{ emptySubTitle || getText('uploaderEmptySubTitle') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue';
import {getEASIText, IGlobalLocal} from '../locale';
import { emptyProps } from './props'


export default defineComponent({
  name: "empty",
  emits: ['clickEmpty'],
  props: {
    ...emptyProps
  },
  setup() {
    const globalEASILocale = inject<IGlobalLocal>('globalEASILocale', {message: {}});
    return {
      getText(key: string, value?: {[props: string]: string | number}){
        return getEASIText(globalEASILocale, key, value)
      },
    }
  }
})
</script>

<style lang="scss">
.easi-packages-ant-upload.ant-upload {
  width: 384px;
  height: 192px;
  background: transparent;
}
</style>
