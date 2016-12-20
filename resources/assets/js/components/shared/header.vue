<template>
  <header class="main-header">

    <router-link to="/" class="logo">
      <span class="logo-mini"><b>A</b>LT</span>
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </router-link>
    <navigation></navigation>
  </header>
</template>

<script>
  const navigation = require('./navigation.vue');

  export default {
    components: {
      navigation
    }
  }
</script>

<style>

</style>
