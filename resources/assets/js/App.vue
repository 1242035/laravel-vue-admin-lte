<template>
  <div class="wrapper">
    <topo></topo>
    <sidebar></sidebar>
    <router-view></router-view>
    <rightbar></rightbar>
    <rodape></rodape>
  </div>
</template>

<script>
import topo from './components/shared/topo'
import sidebar from './components/shared/sidebar'
import rodape from './components/shared/rodape'
import rightbar from './components/shared/rightbar'

export default {
  components: {
    topo,
    sidebar,
    rodape,
    rightbar
  }
}
</script>

<style>
@import url('/static/css/AdminLTE.css');
@import url('/static/css/bootstrap.min.css');
@import url('/static/css/skins/_all-skins.min.css');
</style>
