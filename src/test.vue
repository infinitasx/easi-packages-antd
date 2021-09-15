<template>
  <a-card size="small" :hoverable="false" :bordered="false">
    <EASIUploader :multiple="false"
                  authorization="Bearer giEIERA_6a9nnl-7oAllb-1Dbd0zn1F3SUpWHSO87Pc.56ogvMVFpqQ5MyV_-TrE-SrYpPgJ0XToKyP2UVBQZWg"
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
