<template>
  <div class="easi-uploader-container overflow-auto h-full">
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

<style lang="scss" scoped>
.easi-uploader-container {
  margin-left: -2%;
}
</style>
