<template>
  <div>
    <div class="styleguide-section">
      <!-- <h3>Expand and Filter</h3> -->
      <n-textbox
        v-model="filter.value"
        clearable
        label="Search"
        style="max-width:300px; margin: 40px 0;"
      />
      <n-table
        :filter="filter"
        :sortBy="{ order: 'ascending', prop: 'name' }"
        :data="data"
        is-expandable
      >
        <template v-slot:default="table">
          <n-table-column sortable prop="date" label="Date">
            {{
            formatDate(table.row.date)
            }}
          </n-table-column>
          <n-table-column

            sortable
            prop="name"
            label="Name"
          >{{ table.row.name }}</n-table-column>
          <n-table-column sortable prop="email" label="Email">
            {{
            table.row.email
            }}
          </n-table-column>
          <n-table-column sortable prop="phone" label="Phone">
            {{
            table.row.phone
            }}
          </n-table-column>
        </template>
        <template #expanded>
          <div class="expand-example" />
        </template>
      </n-table>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import NTableColumn from '../components/NTableColumn.vue';
import NTextbox from '../components/NTextbox.vue';
import { users } from '../users';

export default {
  name: 'NTableExample',
  title: 'Table',
  components: {
    NTableColumn,
    NTextbox,
  },

  data() {
    return {
      data: users,

      filter: {
        value: '',
        props: ['name', 'phone', 'email'],
      },
      textbox: '',
    };
  },
  methods: {
    // sortMethod(a, b) {
    //   if (a.name === null) {
    //     return 1;
    //   }
    //   if (b.name === null) {
    //     return -1;
    //   }

    //   const aName = a.name.toUpperCase();
    //   const bName = b.name.toUpperCase();

    //   if (aName < bName) {
    //     return -1;
    //   }
    //   if (aName > bName) {
    //     return 1;
    //   }
    //   return 0;
    // },

    getRowClass(row, index) {
      if (index === 3) {
        return 'is-red';
      }
      return '';
    },
    formatDate(date) {
      return moment(date).format('YYYY/MM/DD');
    },
  },
};
</script>
<style lang="scss">
.is-red .n-table-column {
  background-color: #ac1a1f !important;
}
.expand-example {
  max-width: 100%;
  margin: 10px 0;
  background-image: linear-gradient(45deg, #f1f1f1 25%, transparent 25%),
    linear-gradient(-45deg, #f1f1f1 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #f1f1f1 75%),
    linear-gradient(-45deg, transparent 75%, #f1f1f1 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  height: 100px;
}
</style>
