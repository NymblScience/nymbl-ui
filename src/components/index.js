import Vue from "vue";

import NButton from "./NButton.vue";
import NButtonIcon from "./NButtonIcon.vue";
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
import NMenu from "./NMenu.vue";
import { Layout } from "bootstrap-vue/es/components";

import "../assets/sass/main.scss";

Vue.config.productionTip = false;

const Components = {
  NButton,
  NButtonIcon,
  NModal,
  NNavbar,
  NNavDropdown,
  NNavItem,
  NTextbox,
  NSelect,
  NRadio,
  NRadioGroup,
  NDatepicker,
  NTable,
  NTableColumn,
  NCard,
  NCalendar,
  NMenu
};

const NymblUI = { Components, Layout };

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

Vue.use(Layout);

export default NymblUI;
