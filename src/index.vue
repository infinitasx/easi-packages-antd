<template>
  <EASILayout logo="https://melb-delivery.easi.com.au/static/img/avatar.png" title="EASI IAM" :onLogout="onLogout" :editPassword="editPassword" :toDashboard="toDashboard">
  </EASILayout>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "index",
  setup() {
    return {
      onLogout(){
        return true
      },
      editPassword(){
        return false
      },
      toDashboard(){
        return false
      }
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
