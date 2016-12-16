<template>
  <header class="main-header">

    <router-link to="/" class="logo">
      <span class="logo-mini"><b>A</b>LT</span>
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </router-link>

    <!-- Header Navbar: style can be found in header.less -->
    <navigation></navigation>
  </header>
</template>

<script>
  import navigation from './navigation'

  export default {
    components: {
      navigation
    }
  }
</script>

<style>

</style>
