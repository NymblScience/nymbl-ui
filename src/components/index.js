import Vue from "vue";

import NButton from "./NButton.vue";
import NDropdownItem from "./NDropdownItem.vue";
import NDropdown from "./NDropdown.vue";
import NModal from "./NModal.vue";
import NNavbar from "./NNavbar.vue";
import NNavDropdown from "./NNavDropdown.vue";
import NNavItem from "./NNavItem.vue";
import NSelect from "./NSelect.vue";
import NTextbox from "./NTextbox.vue";
import NDatepicker from "./NDatepicker.vue";
import NRadio from "./NRadio.vue";
import NRadioGroup from "./NRadioGroup.vue";
import NCard from "./NCard.vue";
import NTable from "./NTable.vue";
import NCalendar from "./NCalendar.vue";
import NTableColumn from "./NTableColumn.vue";
import { Layout } from "bootstrap-vue/es/components";
import bCollapse from "bootstrap-vue/es/components/collapse/collapse";
import vBToggle from "bootstrap-vue/es/directives/toggle/toggle";

import "../assets/sass/main.scss";

Vue.config.productionTip = false;

const Components = {
  NButton,
  NDropdownItem,
  NDropdown,
  NModal,
  NNavbar,
  NNavDropdown,
  NNavItem,
  bCollapse,
  NTextbox,
  NSelect,
  NRadio,
  NRadioGroup,
  NDatepicker,
  NTable,
  NTableColumn,
  NCard,
  NCalendar
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
