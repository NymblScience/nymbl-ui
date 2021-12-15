<template>
  <div>
    <!-- <n-section title="Filter & Expand">
      <n-textbox
        v-model="filter.value"
        clearable
        label="Search"
        style="max-width:300px; margin: 40px 0;"
      />
      <n-card>
        <n-table
          :filter="filter"
          :sortBy="{ order: 'ascending', prop: 'name' }"
          :data="dataA"
          is-expandable
        >
          <template v-slot:default="table">
            <n-table-column sortable prop="date" label="Date">
              {{ formatDate(table.row.date) }}
            </n-table-column>
            <n-table-column sortable prop="name" label="Name">{{ table.row.name }}</n-table-column>
            <n-table-column sortable prop="email" label="Email">
              {{ table.row.email }}
            </n-table-column>
            <n-table-column sortable prop="phone" label="Phone">
              {{ table.row.phone }}
            </n-table-column>
          </template>
          <template #expanded>
            <div class="expand-example" />
          </template>
        </n-table>
      </n-card>
    </n-section>
    <n-section title="Pagination">
      <n-card>
        <n-table :sortBy="{ order: 'ascending', prop: 'name' }" :data="dataB">
          <template v-slot:default="table">
            <n-table-column prop="name" label="Name">{{ table.row.name }}</n-table-column>
            <n-table-column prop="email" label="Email">
              {{ table.row.email }}
            </n-table-column>
            <n-table-column prop="phone" label="Phone">
              {{ table.row.phone }}
            </n-table-column>
          </template>
          <template #expanded>
            <div class="expand-example" />
          </template>
        </n-table>
      </n-card>

      <n-pagination
        :pageSize="pageSize.toString()"
        :pageSizes="['1', '3']"
        page-size-switch
        @change="handleChange"
        @pageSizeChange="handlePageSizeChange"
        url-queries
        :pages="Math.round(data.length / pageSize)"
      />
    </n-section> -->
  </div>
</template>

<script>
import moment from 'moment';
// import NTableColumn from '../components/NTableColumn.vue';
// import NTextbox from '../components/NTextbox.vue';
import users from '../users';

export default {
  name: 'TableExample',
  title: 'Table',
  // components: {
  //   NTableColumn,
  //   NTextbox,
  // },

  data() {
    return {
      users,

      filter: {
        value: '',
        props: ['name', 'phone', 'email'],
      },
      textbox: '',
      activePage: 1,
      pageSize: 3,
    };
  },
  // computed: {
  //   dataA() {
  //     return this.users.slice(0, 5);
  //   },
  //   dataB() {
  //     return this.users.slice(
  //       this.activePage * this.pageSize - 1,
  //       this.activePage * this.pageSize + (this.pageSize === 3 ? 2 : 0),
  //     );
  //   },
  // },
  methods: {
    handleChange(page) {
      this.activePage = page;
    },
    handlePageSizeChange(pageSize) {
      this.pageSize = Number(pageSize);
    },

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
