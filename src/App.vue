<template>
  <EASIDrawer :visible="true"></EASIDrawer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { EASIDrawer } from "../lib/index";
export default defineComponent({
  setup() {
    const show = ref(true);
    const setSetting = (mode: string, val: boolean) => {
      console.log(mode, val);
    };
    return {
      show,
      setSetting,
    };
  },
  components: {
    EASIDrawer,
  },
});
</script>

<style></style>
