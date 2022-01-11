import NButton from './components/NButton.vue';
import NButtonIcon from './components/NButtonIcon.vue';
import NModal from './components/NModal.vue';
import NPopover from './components/NPopover.vue';
import NConfirm from './components/NConfirm.vue';
import NNavbar from './components/NNavbar.vue';
import NNavItem from './components/NNavItem.vue';
import NSelect from './components/NSelect.vue';
import NSelectOption from './components/NSelectOption.vue';
import NTextbox from './components/NTextbox.vue';
import NCheckbox from './components/NCheckbox.vue';
import NDatepicker from './components/NDatepicker.vue';
import NRadio from './components/NRadio.vue';
import NRadioGroup from './components/NRadioGroup.vue';
import NCard from './components/NCard.vue';
import NUpload from './components/NUpload.vue';
import NForm from './components/NForm.vue';
import NFormItem from './components/NFormItem.vue';
import NTable from './components/NTable.vue';
import NPagination from './components/NPagination.vue';
import NCalendar from './components/NCalendar.vue';
import NTableColumn from './components/NTableColumn.vue';
import NMenu from './components/NMenu.vue';
import NLoadingCircle from './components/NLoadingCircle.vue';
import './assets/sass/main.scss';
import nconfirm from './plugins/nconfirm';
import nmessage from './plugins/nmessage';

const Components = {
  NButton,
  NButtonIcon,
  NModal,
  NPopover,
  NConfirm,
  NForm,
  NFormItem,
  NNavbar,
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
  NPagination,
  NCard,
  NCalendar,
  NLoadingCircle,
  NMenu,
  NUpload,

};

const Plugins = {
  nconfirm,
  nmessage,
};

const NymblUI = { Components, Plugins };

export default NymblUI;
