<template>
  <EASILayout v-model:setting="showSetting" logo="https://melb-delivery.easi.com.au/static/img/avatar.png"
              :userInfo='{"id":10004,"name":"tagnhai","post":"前端开发工程师","mobile":"+8613344445555","email":"tanghai@easi.com.au","set_password":false,"sub":"10004","avatar":"https://melb-delivery.easi.com.au/static/img/avatar.png","apps":[{"application_id":"iam","name":"IAM","icons":"https://usercontent.melbdelivery.com/easi-file-service/iam/10003/2021-09-13/241bc082-70c5-4f20-a0bb-5a1fdb68133f.png","link":"https://iam.melbdelivery.com/iam","scopes":[{"id":"default","name":"全部"},{"id":"default","name":"全部"},{"id":"default","name":"全部"},{"id":"default","name":"全部"},{"id":"default","name":"全部"},{"id":"default","name":"全部"},{"id":"default","name":"全部"},{"id":"default","name":"全部"}]},{"application_id":"braun","name":"百灵","icons":"https://usercontent.melbdelivery.com/easi-file-service/iam/10003/2021-09-13/5b9ecc1b-f366-4806-827c-7df9d322883e.png","link":"https://braun.melbdelivery.com","scopes":[{"id":"1","name":"墨尔本"},{"id":"2","name":"悉尼"}]},{"application_id":"search-admin","name":"搜索","icons":"https://usercontent.melbdelivery.com/easi-file-service/iam/10003/2021-09-13/4af356c1-a841-4691-a2b0-a01d9d3749bf.png","link":"https://search.melbdelivery.com/dashboard","scopes":[{"id":"city-0","name":"全部"}]}],"default_device_count":3,"devices":[{"id":34,"ip":"199.19.106.187","ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36","device_type":"Desktop","device_id":"e1ba9fb2-c1ee-4e53-8f7d-08ec2b8f8587","session_id":"4bd5cebf-17e2-40ee-b9d2-1e7dff406d71","active_at":1632275485531}]}'
              title="EASI IAM" :onLogout="onLogout" :editPassword="editPassword" :toDashboard="toDashboard">
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
