<template>
  <div class="content-wrapper">
    <section class="content-header">
      <h1>Dashboard <small>Version 2.0</small></h1>
      <breadcrumb :itens="breadcrumb"></breadcrumb>
    </section>
    <section class="content">
      <div class="row"></div>
    </section>
  </div>
</template>

<script>
  const Breadcrumb = require('./ui/Breadcrumb.vue');
  export default {
    components: {
      Breadcrumb
    },
    data () {
      return {
        breadcrumb: [
          { url: '/', icon: 'fa fa-dashboard', title: 'Home' },
          { title: 'Dashboard', active: true }
        ]
      }
    }
  }
</script>

<style scoped></style>
