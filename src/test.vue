<template>
  <a-card size="small" :hoverable="false" :bordered="false">
    <EASIUploader>
      <EASIButton>触发上传组件</EASIButton>
    </EASIUploader>
  </a-card>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "test"
})
</script>

<style lang="scss">
img.ant-image-preview-img{
  display: inline-block;
}
</style>
