<template>
  <div class="easi-packages-uploader-container overflow-auto h-full">
    <a-image-preview-group>
      <slot></slot>
    </a-image-preview-group>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "previewContainer"
})
</script>

<style lang="scss">
.easi-packages-uploader-container {
  margin-left: -2%;
}
</style>
