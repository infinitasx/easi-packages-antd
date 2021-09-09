<template>
  <a-card size="small" :hoverable="false" :bordered="false">
    <EASIUploader :multiple="false"
                  authorization="Bearer Z6CtscE5Hy-WT9T8ag5mDM6OWmHb0LAzH3GxEGojc7Q.45n8eAkaU7DW_pQ8Ew63OZCOQzRDjuveEZkg29ZCCwI"
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
