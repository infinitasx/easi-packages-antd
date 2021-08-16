<template>
  <a-card :hoverable="false" :bordered="false">
    <a-space>
      <EASIButton type="link" danger>删除</EASIButton>
      <EASIButton type="primary" danger>删除</EASIButton>
    </a-space>
  </a-card>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "test"
})
</script>

<style lang="scss" scoped>

</style>
