<template>
  <EASITable :dataSource="tableData" rowKey="id" :scroll="{ x: true }" class="table">
    <template #headerLeft>左侧标题</template>
    <template #headerRight>
      <EASIButton type="primary">操作</EASIButton>
    </template>
    <a-table-column title="key" key="key" data-index="key" width="20%" />
    <a-table-column title="name" key="name" data-index="name" width="20%" />
    <a-table-column title="age" key="age" data-index="age" width="20%" />
    <a-table-column title="address" key="address" data-index="address" width="20%" />
  </EASITable>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 2 Lake Park, London No. 2 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ]);
    return { tableData };
  },
});
</script>

<style>
.table {
  width: 100%;
}
</style>
