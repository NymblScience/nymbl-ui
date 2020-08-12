<template>
  <div class="typography-container">
    <span class="roboto-light">Roboto Light</span>
    <span class="roboto-regular">Roboto Regular</span>
    <span class="roboto-bold ">Roboto Bold</span>
    <span class="roboto-black">Roboto Black</span>
    <br />
    <p>
      Apparently we had reached a great height in the atmosphere, for the sky
      was a dead black, and the stars had ceased to twinkle.
    </p>
  </div>
</template>
<script>
export default {
  name: "Typography",
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
$text-color: #231f20;
.typography-container {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: $text-color;
}
span {
  font-size: 1.8rem;
  display: block;
  margin-bottom: 0.4rem;
}
.roboto-light {
  font-weight: 300;
}
.roboto-regular {
  font-weight: 400;
}

.roboto-bold {
  font-weight: 500;
}

.roboto-black {
  font-weight: 700;
}
p {
  margin-top: 1rem;
  max-width: 30rem;
  line-height: 1.9;
  letter-spacing: 0.06rem;
}
</style>
