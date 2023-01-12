<template>
  <div>
    <n-card class="max-w-lg">
      <n-form @submit.prevent="submit">
        <n-form-item>
          <n-textbox
            v-model="firstName"
            label="First Name"
            placeholder="John"
          />
        </n-form-item>
        <n-form-item>
          <n-textbox
            v-model="lastName"
            label="Last Name"
            placeholder="Smith"
          />
        </n-form-item>
        <n-form-item>
          <n-radio-group
            v-model="gender"
            name="group1"
            :options="radioOptions"
          >
            Gender
          </n-radio-group>
        </n-form-item>
        <n-form-item>
          <n-select
            v-model="country"
            label="Country"
            placeholder="Select..."
            :options="countries"
          />
        </n-form-item>
        <n-form-item>
          <n-datepicker
            v-model="dob"
            placeholder="10/11/1960"
            label="Date of Birth"
          />
        </n-form-item>
        <n-form-item>
          <n-checkbox
            v-model="isActive"
            label="Is Active?"
          />
        </n-form-item>
        <template #footer>
          <n-button
            :loading="loading"
            type="button"
            @click="submit"
          >
            Submit
          </n-button>
        </template>
      </n-form>
    </n-card>
    <n-card class="mt-10 max-w-lg">
      <n-form @submit.prevent="submit">
        <n-form-item>
          <n-textbox
            v-model="firstNameBorder"
            border
            center
            placeholder="Enter first name"
          />
        </n-form-item>
        <n-form-item>
          <n-textbox
            v-model="lastNameBorder"
            border
            center
            placeholder="Enter last name"
          />
        </n-form-item>
        <template #footer>
          <n-button
            :loading="loading"
            disabled
            type="button"
            @click="submit"
          >
            Submit
          </n-button>
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
  dob: "2023-01-12T16:18:41.81",
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
