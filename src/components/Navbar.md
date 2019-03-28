```vue

const Vue = require('vue').default

const NavItem = require('./NavItem.vue').default
Vue.component('NavItem', NavItem)

const NavDropdown = require('./NavDropdown.vue').default
Vue.component('NavDropdown', NavDropdown)

const DropdownItem = require('./DropdownItem.vue').default
Vue.component('DropdownItem', DropdownItem)

const logo = require('../assets/img/nymblscience-logo.svg');


<Navbar>
    <template v-slot:logo>
        <img class="navbar__logo" :src="logo"/>
    </template>
    <template v-slot:nav-items>
        <nav-item :active="true">Item One</nav-item>
        <nav-item>Item Two</nav-item>
        <nav-item disabled>Disabled</nav-item>
        <nav-item>Item Three</nav-item>
        <nav-dropdown text="Dropdown" right>
            <dropdown-item>Item One</dropdown-item>
            <dropdown-item>Item Two</dropdown-item>
            <dropdown-item disabled>Disabled</dropdown-item>
        </nav-dropdown>
    </template>
</Navbar>
```