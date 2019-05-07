import Vue from "vue";

import NButton from "./NButton.vue";
import DropdownItem from "./DropdownItem.vue";
import Dropdown from "./Dropdown.vue";
import Modal from "./Modal.vue";
import Navbar from "./Navbar.vue";
import NavDropdown from "./NavDropdown.vue";
import NavItem from "./NavItem.vue";
// import NSelect from "./NSelect.vue";
import NTextbox from "./NTextbox.vue";
import { Layout } from "bootstrap-vue/es/components";
import bCollapse from "bootstrap-vue/es/components/collapse/collapse";
import vBToggle from "bootstrap-vue/es/directives/toggle/toggle";

import "../assets/sass/main.scss";

Vue.config.productionTip = false;

const Components = {
  NButton,
  DropdownItem,
  Dropdown,
  Modal,
  Navbar,
  NavDropdown,
  NavItem,
  bCollapse,
  NTextbox
  // NSelect
};

const Directives = {
  vBToggle
};

const NymblUI = { Components, Directives, Layout };

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

Object.keys(Directives).forEach(name => {
  Vue.directive(name, Directives[name]);
});

Vue.use(Layout);

export default NymblUI;
