<template>
  <EASILayout v-model:setting="showSetting" logo="https://melb-delivery.easi.com.au/static/img/avatar.png" :userInfo="{mobile: '+610400000012', name: 'admin'}" title="EASI IAM" :onLogout="onLogout" :editPassword="editPassword" :toDashboard="toDashboard">
  </EASILayout>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"

export default defineComponent({
  name: "index",
  setup() {

    const showSetting = ref<boolean>(false);

    return {
      showSetting,
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
