<template>
  <b-dropdown :text="text">
    <slot />
  </b-dropdown>
</template>
<script>
import BDropdown from "bootstrap-vue/es/components/dropdown/dropdown";

export default {
  name: "NDropdown",
  components: {
    BDropdown
  },
  props: {
    /**
     * Dropdown Text
     */
    text: {
      type: String,
      default: ""
    },
    /**
     * The size of the button
     * `small, normal, large`
     */
    type: {
      default: "primary",
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    }
  }
};
</script>
<style lang="scss">
.dropdown-toggle::after {
  // display: inline-block;
  // margin-left: 0.255em;
  // vertical-align: unset;
  // content: "";
  // border: none;

  // background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'/%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'/%3E%3C/svg%3E")
  // border-top: 0.3em solid;
  // border-right: 0.3em solid transparent;
  // border-bottom: 0;
  // border-left: 0.3em solid transparent;
  // height: 20px;
  // width:20px;
  // background:red;
}

.dropdown {
  .dropdown-menu {
    transition: all 0.07s;
    overflow: hidden;
    transform-origin: top center;
    transform: scale(1, 0);
    display: block;
    border: 1px solid #ebeef5;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
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
