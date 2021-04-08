<template>
  <div>
    <n-card class="max-w-lg">
      <n-form @submit.prevent="submit">
        <n-form-item>
          <n-textbox label="First Name" placeholder="John" v-model="firstName" />
        </n-form-item>
        <n-form-item>
          <n-textbox label="Last Name" placeholder="Smith" v-model="lastName" />
        </n-form-item>
        <n-form-item>
          <n-radio-group name="group1" :options="radioOptions" v-model="gender"
            >Gender</n-radio-group
          >
        </n-form-item>
        <n-form-item>
          <n-select
            label="Country"
            placeholder="Select..."
            v-model="country"
            :options="countries"
          />
        </n-form-item>
        <n-form-item>
          <n-datepicker v-model="dob" placeholder="10/11/1960" label="Date of Birth" />
        </n-form-item>
        <n-form-item>
          <n-checkbox v-model="isActive" label="Is Active?" />
        </n-form-item>
        <template #footer>
          <n-button :loading="loading" @click="submit" type="button">Submit</n-button>
        </template>
      </n-form>
    </n-card>
    <n-card class="mt-10 max-w-lg">
      <n-form @submit.prevent="submit">
        <n-form-item>
          <n-textbox border center  placeholder="Enter first name" v-model="firstNameBorder" />
        </n-form-item>
        <n-form-item>
          <n-textbox border  center  placeholder="Enter last name" v-model="lastNameBorder" />
        </n-form-item>
                <template #footer>
          <n-button :loading="loading" disabled  @click="submit" type="button">Submit</n-button>
        </template>
      </n-form>
    </n-card>
  </div>
</template>

<script>
const initialValues = {
  firstName: null,
  lastName: null,
  firstNameBorder: null,
  lastNameBorder: null,
  isActive: true,
  country: 'null',
  dob: null,
  gender: '',
  loading: false,
};
export default {
  name: 'FormExample',
  title: 'Forms',
  data() {
    return {
      countries: ['USA', 'New Zeeland'],
      radioOptions: ['Female', 'Male', 'Gender Diverse'],
      ...initialValues,
    };
  },
  methods: {
    submit() {
      this.loading = true;
      console.log(this);
      const msg = {
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        country: this.country,
        dob: this.dob,
        isActive: this.isActive,
      };
      setTimeout(() => {
        this.$nMessage({
          message: msg,
          type: 'success',
          duration: 3000,
        });
        this.loading = false;
      }, 1000);
    },
  },
};
</script>
