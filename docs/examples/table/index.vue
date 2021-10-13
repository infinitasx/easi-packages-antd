<template>
  <EASITable :dataSource="tableData" rowKey="id" :scroll="{ x: true }">
    <template #headerLeft>左侧标题</template>
    <template #headerRight>
      <EASIButton type="primary">操作</EASIButton>
    </template>
    <a-table-column title="id" key="id" data-index="id" />
    <a-table-column title="name" key="name" data-index="name" />
  </EASITable>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const tableData = ref([{ name: 'EASI', id: 1 }]);
    return { tableData };
  },
});
</script>

<style></style>
