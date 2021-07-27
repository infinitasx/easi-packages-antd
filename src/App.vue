<template>
  <EASIHeader @openHandler="show = true"></EASIHeader>
  <EASIDrawer v-model:show="show" v-model:drawerSeting="defaultDrawerSeting" :userInfo="{}" />
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  setup() {
    const show = ref(false);
    const defaultDrawerSeting = ref({
      mode: "light",
      showTab: true,
    });
    const changeSet = (e: any) => {
      defaultDrawerSeting.value = e;
    };
    const close = (e: boolean) => {
      console.log(e);
    };
    const menu = reactive([
      {
        path: "/customer",
        name: "customer",
        meta: { title: "顾客推送管理", icon: "iconfont icon-team", cached: true, permission: "user:job:list", breadcrumb: [{ name: "customer", path: "/customer", breadcrumbName: "顾客推送管理" }] },
      },
      {
        path: "/driver",
        name: "driver",
        meta: {
          title: "配送员推送管理",
          icon: "iconfont icon-send",
          cached: true,
          permission: "courier:job:list",
          breadcrumb: [{ name: "driver", path: "/driver", breadcrumbName: "配送员推送管理" }],
        },
      },
      {
        path: "/merchant",
        name: "merchant",
        meta: {
          title: "商家推送管理",
          icon: "iconfont icon-shop",
          cached: true,
          permission: "merchant:job:list",
          breadcrumb: [{ name: "merchant", path: "/merchant", breadcrumbName: "商家推送管理" }],
        },
      },
      {
        path: "/sms",
        name: "sms",
        meta: { title: "短信模板管理", icon: "iconfont icon-mail", cached: true, permission: "template:list", breadcrumb: [{ name: "sms", path: "/sms", breadcrumbName: "短信模板管理" }] },
      },
      {
        path: "/unsubscribe",
        name: "unsubscribe",
        meta: {
          title: "退订管理",
          icon: "iconfont icon-solution",
          cached: true,
          permission: "unsubscribe:list",
          breadcrumb: [{ name: "unsubscribe", path: "/unsubscribe", breadcrumbName: "退订管理" }],
        },
      },
      {
        path: "/sms/variable",
        name: "sms-variable",
        meta: {
          title: "占位符管理",
          icon: "iconfont icon-layout",
          cached: true,
          permission: "template:val:list",
          breadcrumb: [{ name: "sms-variable", path: "/sms/variable", breadcrumbName: "占位符管理" }],
        },
      },
    ]);
    return {
      show,
      menu,
      defaultDrawerSeting,
      changeSet,
    };
  },
});
</script>

<style></style>
