<template>
  <!-- eslint-disable max-len -->

  <div>
    <div class="styleguide-section">
      <h3>Default</h3>
      <n-select  v-model="value" :options="options" label="Colors" :floatingLabel="false"></n-select>
    </div>

    <div class="styleguide-section">
      <h3>Seperate Value</h3>
      <n-select

        :keys="{ label: 'companyProfileName', value: 'companyProfileId' }"
        v-model="value2"
        :options="options2"
        label="Company Profiles"
        :floatingLabel="false"
      ></n-select>
    </div>
    <div class="styleguide-section">
      <h3>Seperate Value</h3>
      <n-select
        has-search
        v-model="value3"
        :options="options3"
        label="Company Profiles"
        :floatingLabel="false"
      ></n-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NSelectExample',
  title: 'Select',
  data() {
    return {
      value: 'Red',
      options: ['Red', 'Blue', 'Green'],
      options3: [
        {
          label: 'Red',
          image: 'https://placehold.it/64/ff0000/ff0000',
          value: 'red',
        },
        {
          label: 'Blue',
          image: 'https://placehold.it/64/0000ff/0000ff',
          value: 'blue',
        },
        {
          label: 'Green',
          image: 'https://placehold.it/64/008000/008000',
          value: 'green',
        },
        {
          label: 'Yellow',
          image: 'https://placehold.it/64/ffff00/ffff00',
          value: 'yellow',
        },
        {
          label: 'Purple',
          image: 'https://placehold.it/64/800080/800080',
          value: 'purple',
        },
        {
          label: 'Pink',
          image: 'https://placehold.it/64/ffc0cb/ffc0cb',
          value: 'pink',
        },
        {
          label: 'Lavender',
          image: 'https://placehold.it/64/e6e6fa/e6e6fa',
          value: 'lavender',
        },
        {
          label: 'Orange',
          image: 'https://placehold.it/64/ffa500/ffa500',
          value: 'orange',
        },
        {
          label: 'Peach',
          image: 'https://placehold.it/64/ffdab9/ffdab9',
          value: 'peach',
        },
        {
          label: 'Lime',
          image: 'https://placehold.it/64/00ff00/00ff00',
          value: 'lime',
        },
      ],
      value2: 2,
      value3: '',
      options2: [
        {
          companyProfileId: 1,
          companyProfileKey: 'SeniorLivingCenter',
          companyProfileName: 'Senior Living Center',
        },
        {
          companyProfileId: 2,
          companyProfileKey: 'HomeCare',
          companyProfileName: 'Home Care',
        },
        {
          companyProfileId: 3,
          companyProfileKey: 'CommunityProgram',
          companyProfileName: 'Community Program',
        },
        {
          companyProfileId: 4,
          companyProfileKey: 'Healthcare',
          companyProfileName: 'Healthcare',
        },
        {
          companyProfileId: 5,
          companyProfileKey: 'CommunityCoach',
          companyProfileName: 'Community Coach',
        },
      ],
    };
  },
};
</script>
