<template>
  <EASIText></EASIText>
  <EASILayout></EASILayout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
});
</script>

<style></style>
