
```vue
<template>
  <div>
    <n-table :sortBy="{order: 'ascending', prop: 'name'}" :data="data">
      <template v-slot:default="table">
        <n-table-column align="center" sortable prop="name" label="Name">{{ table.row.name }}</n-table-column>
        <n-table-column align="left" sortable prop="id" label="Id">{{ table.row.id }}</n-table-column>
        <n-table-column sortable prop="date" label="Date">{{ table.row.date }}</n-table-column>
        <n-table-column align="left" sortable label="Phone" prop="phone">{{ table.row.phone }}</n-table-column>
      </template>
      <template v-slot:expanded="row">{{ row.row }}</template>
    </n-table>
  </div>
</template>

<script>
const NTableColumn = require("./NTableColumn.vue").default;

export default {
  name: "NTableExample",
  components: {
    NTableColumn
  },
  data() {
    return {
      data: [
        {
          id: "1",
          date: "10/18/2018 13:21:11",
          name: "The Shadow",
          phone: "11"
        },
        {
          id: "1",
          date: "10/18/2018 13:21:11",
          name: "Arthur",
          phone: "11"
        },
        {
          id: "2",
          date: "10/18/2018 13:11:11",
          name: "The Wasp",
          phone: "00"
        },
        {
          id: "3",
          date: "12/18/2018 13:20:11",
          name: "Supergirl",
          phone: "22"
        }
      ]
    };
  }
};
</script>
<style lang="scss"></style>
```
