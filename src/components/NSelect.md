```vue
<template>
  <div>
    <div class="styleguide-section">
      <h3>Default</h3>
      <n-select v-model="value" :options="options" label="Colors" :floatingLabel="false"></n-select>
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
  </div>
</template>

<script>
export default {
  name: "NSelectExample",
  data() {
    return {
      value: "Red",
      options: ["Red", "Blue", "Green"],
      value2: 2,
      options2: [
        {
          companyProfileId: 1,
          companyProfileKey: "SeniorLivingCenter",
          companyProfileName: "Senior Living Center",
   
        },
        {
          companyProfileId: 2,
          companyProfileKey: "HomeCare",
          companyProfileName: "Home Care",
        },
        {
          companyProfileId: 3,
          companyProfileKey: "CommunityProgram",
          companyProfileName: "Community Program",
    
        },
        {
          companyProfileId: 4,
          companyProfileKey: "Healthcare",
          companyProfileName: "Healthcare",
    
        },
        {
          companyProfileId: 5,
          companyProfileKey: "CommunityCoach",
          companyProfileName: "Community Coach",
    
        }
      ]
    };
  }
};
</script>
```