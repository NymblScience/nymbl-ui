import Vue from "vue";

import NButton from "./NButton.vue";
import NButtonIcon from "./NButtonIcon.vue";
import NModal from "./NModal.vue";
import NConfirm from "./NConfirm.vue";
import NNavbar from "./NNavbar.vue";
import NNavDropdown from "./NNavDropdown.vue";
import NNavItem from "./NNavItem.vue";
import NSelect from "./NSelect.vue";
import NSelectOption from "./NSelectOption.vue";
import NTextbox from "./NTextbox.vue";
import NCheckbox from "./NCheckbox.vue";
import NDatepicker from "./NDatepicker.vue";
import NRadio from "./NRadio.vue";
import NRadioGroup from "./NRadioGroup.vue";
import NCard from "./NCard.vue";
import NForm from "./NForm.vue";
import NFormItem from "./NFormItem.vue";
import NTable from "./NTable.vue";
import NCalendar from "./NCalendar.vue";
import NTableColumn from "./NTableColumn.vue";
import NMenu from "./NMenu.vue";
import { BContainer, BRow, BCol } from "bootstrap-vue/es/components";
import "../assets/sass/main.scss";

Vue.config.productionTip = false;

const Components = {
  NButton,
  NButtonIcon,
  NModal,
  NConfirm,
  NForm,
  NFormItem,
  NNavbar,
  NNavDropdown,
  NNavItem,
  NCheckbox,
  NTextbox,
  NSelect,
  NSelectOption,
  NRadio,
  NRadioGroup,
  NDatepicker,
  NTable,
  NTableColumn,
  NCard,
  NCalendar,
  NMenu,
  BContainer,
  BRow,
  BCol
};

const NymblUI = { Components };

// Object.keys(Components).forEach(name => {
//   Vue.component(name, Components[name]);
// });

export default NymblUI;
