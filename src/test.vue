<template>
  <a-card size="small" :hoverable="false" :bordered="false">
    <EASIUploader :multiple="false"
                  aspectRatio="1*2"
                  authorization="Bearer Tv8rdNscqlP0OiALY6_rj0o0FaIYyaYMJg7JqQXtgpU.yOFu2ubL3Ub0ijgxVBIbO0YOXdN4b5rNcYU38rRs0fQ"
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
