import Vue from 'vue';

import ButtonExample from '@/examples/ButtonExample.vue';
import NavExample from '@/examples/NavExample.vue';
import CardExample from '@/examples/CardExample.vue';
import ModalExample from '@/examples/ModalExample.vue';
import FormExample from '@/examples/FormExample.vue';
import TableExample from '@/examples/TableExample.vue';
import MessageExample from '@/examples/MessageExample.vue';

Vue.config.productionTip = false;

const Components = {
  ButtonExample,
  NavExample,
  CardExample,
  ModalExample,
  MessageExample,
  FormExample,
  TableExample,
};

const NymblUI = { Components };

export default NymblUI;
