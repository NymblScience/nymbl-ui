```vue
<template>
  <div>
    <div class="styleguide-section">
      <h3>Default</h3>
      <n-table
        :row-class="getRowClass"
        :sortBy="{ order: 'ascending', prop: 'name' }"
        :data="data"
      >
        <template v-slot:default="table">
          <n-table-column is-nested border-right label="Parent">
            <n-table-column align="center" sortable prop="name" label="Name">{{
              table.row.name
            }}</n-table-column>
            <n-table-column align="center" sortable prop="name" label="2">{{
              table.row.name
            }}</n-table-column>
          </n-table-column>
          <n-table-column is-nested border-right label="Parent 2">
            <n-table-column align="center" sortable prop="name" label="Name">{{
              table.row.name
            }}</n-table-column>
            <n-table-column align="center" sortable prop="name" label="2">{{
              table.row.name
            }}</n-table-column>
          </n-table-column>
        </template>
        <template v-slot:expanded="row">{{ row.row }}</template>
      </n-table>
    </div>
    <div class="styleguide-section">
      <h3>Expand and Filter</h3>
      <n-textbox
        v-model="filter.value"
        clearable
        label="Search"
        style="max-width:300px; margin: 40px 0;"
      />
      <n-table
        :filter="filter"
        :sortBy="{ order: 'ascending', prop: 'name' }"
        :data="data2"
        is-expandable
      >
        <template v-slot:default="table">
          <n-table-column
            :sort-method="sortMethod"
            sortable
            prop="name"
            label="Name"
            >{{ table.row.name }}</n-table-column
          >
          <n-table-column sortable prop="email" label="Email">{{
            table.row.email
          }}</n-table-column>
          <n-table-column sortable prop="phone" label="Phone">{{
            table.row.phone
          }}</n-table-column>
        </template>
        <template #expanded>
          <div class="expand-example" />
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
      data: this.getFakeData(10),
      data2: this.getFakeData(4),

      filter: {
        value: "",
        props: ["name", "phone", "email"]
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
    getFakeData(count = 10) {
      const data = new Array(count).fill("");
      return data.map(a => ({
        name: faker.name.findName(),
        id: faker.random.uuid(),
        date: faker.date.past(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email()
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
.expand-example {
  max-width: 100%;
  margin: 10px 40px;
  background-image: linear-gradient(45deg, #f1f1f1 25%, transparent 25%),
    linear-gradient(-45deg, #f1f1f1 25%, transparent 25%), linear-gradient(
      45deg,
      transparent 75%,
      #f1f1f1 75%
    ), linear-gradient(-45deg, transparent 75%, #f1f1f1 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  height: 100px;
}
</style>
```
