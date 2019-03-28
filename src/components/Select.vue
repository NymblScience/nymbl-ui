<template>
  <b-dropdown :text="text">
    <slot />
  </b-dropdown>
</template>
<script>
import BFormSelect from 'bootstrap-vue/es/components/form-select/form-select';

export default {
  name: 'Select',
  components: {
    BFormSelect,
  },
  props: {
    /**
    * Dropdown Text
    */
    text: {
      type: String,
      default: '',
    },
    /**
    * The size of the button
    * `small, normal, large`
    */
    type: {
      default: 'primary',
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" >


// .dropdown-toggle::after {
//     display: inline-block;
//     // margin-left: 0.255em;
//     vertical-align: unset;
//     content: "";
//     border: none;
//     width: 10px;
//     height: 10px;
//     background:red;
//     // border-top: 0.3em solid;
//     // border-right: 0.3em solid transparent;
//     // border-bottom: 0;
//     // border-left: 0.3em solid transparent;
//     // height: 20px;
//     // width:20px;
//     // background:red;
// }

.dropdown {

    .dropdown-menu {
        transition: all 0.07s;
        overflow: hidden;
        transform-origin: top center;
        transform: scale(1,0);
        display: block;
              border: 1px solid #ebeef5;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,.33);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.33);
    }
    &:hover {

    }
}
.dropdown.show {
       .dropdown-menu {
            transform: scale(1);
      }
}

</style>
