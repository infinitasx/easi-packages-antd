<template>
  <a-card size="small" :hoverable="false" :bordered="false">
    <EASIUploader :multiple="false"
                  aspectRatio="1*2"
                  authorization="Bearer oqbK3zUv4AN3mpivH9F_UkcR0tmiaDrg0vplbh4tNXM.fHRf0lXLCPjySVxFe65x-T8ArkggSzKQEFWJl5GM_fw"
                  system="iam"
                  @ok="handleOK"
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
      },
      handleOK(result){
        console.log(result)
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
