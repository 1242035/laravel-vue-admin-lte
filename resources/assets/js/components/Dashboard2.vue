<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Dashboard <small>Version 2.0</small></h1>

      <breadcrumb :itens="breadcrumb"></breadcrumb>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
      </div>
    </section>
  </div>
</template>

<script>
  import Breadcrumb from './ui/Breadcrumb'
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
