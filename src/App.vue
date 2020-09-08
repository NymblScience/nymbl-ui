<template>
  <div id="app" class="mx-auto mt-10 max-w-4xl" >
    <img class="mb-10" style="max-width: 300px" src="@/assets/img/nymblscience-logo.svg"/>
    {{ process ?  process.env.APP_VER ? process.env.APP_VER : '' :null   }}
    <h1 class="my-10 font-bold text-4xl">Style Guide</h1>
    <router-view />
  </div>
</template>
