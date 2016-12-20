<template>
  <div class="content-wrapper">
    <section class="content-header">
      <h1>Charts</h1>

      <breadcrumb :itens="breadcrumb"></breadcrumb>
    </section>
    <section class="content">
      <div class="row">
      </div>
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
          { title: 'Charts', active: true }
        ]
      }
    }
  }
</script>

<style scoped></style>
