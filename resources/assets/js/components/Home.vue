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
        <info-box></info-box>
      </div>

      <div class="row">
        <div class="col-md-12">
          <box1></box1>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8">
          <map-report></map-report>

          <div class="row">
            <div class="col-md-6">
              <direct-chat></direct-chat>
            </div>

            <div class="col-md-6">
              <user-list></user-list>
            </div>
          </div>

          <table-box></table-box>
        </div>

        <div class="col-md-4">
          <info-box2></info-box2>

          <usage-box></usage-box>

          <product-list></product-list>
        </div>
        <!-- /.info-box -->
      </div>
    </section>
  </div>
</template>

<script>
  const InfoBox = require('./dashboard/InfoBox.vue');
  const InfoBox2 = require('./dashboard/InfoBox2.vue');
  const Breadcrumb = require('./ui/Breadcrumb.vue');
  const Box1 = require('./ui/Box1.vue');
  const MapReport = require('./ui/MapReport.vue');
  const DirectChat = require('./ui/DirectChat.vue');
  const UserList = require('./ui/UserList.vue');
  const TableBox = require('./ui/TableBox.vue');
  const UsageBox = require('./ui/UsageBox.vue');
  const ProductList = require('./ui/ProductList.vue');

  export default {
    components: {
      InfoBox,
      InfoBox2,
      Breadcrumb,
      Box1,
      MapReport,
      DirectChat,
      UserList,
      TableBox,
      UsageBox,
      ProductList
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
