import Vue from "vue";

import Button from "./Button.vue";
import DropdownItem from "./DropdownItem.vue";
import Dropdown from "./Dropdown.vue";
import Modal from "./Modal.vue";
import Navbar from "./Navbar.vue";
import NavDropdown from "./NavDropdown.vue";
import NavItem from "./NavItem.vue";
// import { Layout } from "bootstrap-vue/es/components";
// import bCollapse from "bootstrap-vue/es/components/collapse/collapse";
// import vBToggle from "bootstrap-vue/es/directives/toggle/toggle";

// Load main SCSS file, (Bootstrap configuration included)
import "../assets/sass/main.scss";

Vue.config.productionTip = false;

const Components = {
  Button,
  DropdownItem,
  Dropdown,
  Modal,
  Navbar,
  NavDropdown,
  NavItem
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
