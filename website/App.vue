<template>
  <header>
    <a-row>
      <a-col :span="6">
        <img class="ui-logo" src="./logo.webp" />
        EASI组件库
      </a-col>
      <a-col :span="18">
        <div class="m-menu">组件</div>
      </a-col>
    </a-row>
  </header>
  <div class="main-wrapper">
    <a-row>
      <a-col :span="6">
        <a-menu class="menu">
          <a-menu-item-group :title="tag.tag" v-for="(tag, index) in menuList" :key="index">
            <a-menu-item @click="goPage(item.path)" v-for="(item, i) in tag.children" :key="`${index}-${i}`"> {{ item.components }} {{ item.name }} </a-menu-item>
          </a-menu-item-group>
        </a-menu>
      </a-col>
      <a-col :span="18">
        <section class="container-component">
          <router-view></router-view>
        </section>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import menuList from "./menu.json";
export default {
  setup() {
    const router = useRouter();
    const goPage = (path) => {
      router.push(path);
    };
    return {
      goPage,
      menuList,
    };
  },
};
</script>

<style></style>
