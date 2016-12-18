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
const topo = require('./components/shared/topo.vue');
const sidebar = require('./components/shared/sidebar.vue');
const rodape = require('./components/shared/rodape.vue');
const rightbar = require('./components/shared/rightbar.vue');
const passportClient = require('./components/passport/Clients.vue');
const authorizedClient = require('./components/passport/AuthorizedClients.vue');
const personalAccessClient = require('./components/passport/PersonalAccessTokens.vue');
export default {
  components: {
    topo,
    sidebar,
    rodape,
    rightbar,
    passportClient,
    authorizedClient,
    personalAccessClient
  }
}
</script>
