<template>
  <a-card size="small" :hoverable="false" :bordered="false">
    <EASIUploader :multiple="5"
                  aspectRatio="1*2"
                  authorization="Bearer V7Heck09BLDpJcrxF-bHy5Q1xqf_EAvFJa5hFZZ2dl4.dug0H93flWpVXomnEoCxpFS5z1N4n31w8haN76-_gdg"
                  system="iam"
                  @error="handleError"
    >
      <EASIButton>触发上传组件</EASIButton>
    </EASIUploader>
  </a-card>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "test",
  setup(){
    return {
      handleError(err){
        console.log(err)
      }
    }
  }
})
</script>

<style lang="scss">
img.ant-image-preview-img{
  display: inline-block;
}
</style>
