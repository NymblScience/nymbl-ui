```vue
const Vue = require('vue').default

const DropdownItem = require('./DropdownItem.vue').default
Vue.component('DropdownItem', DropdownItem)

<dropdown text="Dropdown Button" class="m-md-2">
    <dropdown-item>First Action</dropdown-item>
    <dropdown-item>Second Action</dropdown-item>
</dropdown>
```
