```vue
<template>
  <div>
    <div class="styleguide-section">
      <h3>Default</h3>
      <n-table :row-class="getRowClass" :sortBy="{order: 'ascending', prop: 'name'}" :data="data">
        <!-- <template v-slot:name>
          <div>Custom Header Slot</div>
          <n-textbox v-model="textbox" />
        </template>-->

        <template v-slot:default="table">
          <n-table-column
            customHeader="name"
            align="center"
            sortable
            prop="name"
            label="Name"
          >{{ table.row.name }}</n-table-column>
          <n-table-column align="left" sortable prop="id" label="Id">{{ table.row.id }}</n-table-column>
          <n-table-column sortable prop="date" label="Date">{{ table.row.date }}</n-table-column>
          <n-table-column align="left" sortable label="Phone" prop="phone">{{ table.row.phone }}</n-table-column>
        </template>
        <template v-slot:expanded="row">{{ row.row }}</template>
      </n-table>
    </div>
    <div class="styleguide-section">
      <h3>Filter</h3>
      <n-textbox
        v-model="filter.value"
        clearable
        label="Search"
        style="max-width:300px; margin: 40px 0;"
      />
      <n-table :filter="filter" :sortBy="{order: 'ascending', prop: 'name'}" :data="data2">
        <template v-slot:default="table">
          <n-table-column
            align="center"
            :sort-method="sortMethod"
            sortable
            prop="name"
            label="Name"
          >{{ table.row.name }}</n-table-column>
          <n-table-column align="left" sortable prop="id" label="Id">{{ table.row.id }}</n-table-column>
        </template>
      </n-table>
    </div>
  </div>
</template>

<script>
const NTableColumn = require("./NTableColumn.vue").default;
const NTextbox = require("./NTextbox.vue").default;
const faker = require("faker");

export default {
  name: "NTableExample",
  components: {
    NTableColumn,
    NTextbox
  },

  data() {
    return {
      data: this.getFakeData(),
      data2: [
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
      ],

      filter: {
        value: "",
        props: ["name", "id"]
      },
      textbox: ""
    };
  },
  methods: {
    sortMethod(a, b) {
      if (a.name === null) {
        return 1;
      }
      if (b.name === null) {
        return -1;
      }

      const aName = a.name.toUpperCase();
      const bName = b.name.toUpperCase();

      if (aName < bName) {
        return -1;
      }
      if (aName > bName) {
        return 1;
      }
      return 0;
    },
    getFakeData() {
      const data = new Array(10).fill("");
      return data.map(a => ({
        name: faker.name.findName(),
        id: faker.random.uuid(),
        date: faker.date.past(),
        phone: faker.phone.phoneNumber()
      }));
    },

    getRowClass(row, index) {
      if (index === 3) {
        return "is-red";
      }
    }
  }
};
</script>
<style lang="scss">
.is-red .n-table-column {
  background-color: #ac1a1f !important;
}
</style>
```
