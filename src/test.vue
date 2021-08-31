<template>
  <a-card size="small" :hoverable="false" :bordered="false">
    <EASIUploader :multiple="false"
                  :aspectRatio="1/2"
                  authorization="Bearer 2SMK-Yuancu4uUiXpFESQ3_C30eE7JMhyj5xz_Zjers.GFED2mHS-D3TTcM8msHyat6EPVNUX79Y7OZebDLiffA"
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
