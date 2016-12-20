<template>
  <div class="wrapper">
    <header></header>
    <sidebar></sidebar>
    <router-view></router-view>
    <rightbar></rightbar>
    <footer></footer>
  </div>
</template>

<script>
const header = require('./components/shared/header.vue');
const sidebar = require('./components/shared/sidebar.vue');
const footer = require('./components/shared/footer.vue');
const rightbar = require('./components/shared/rightbar.vue');
App = {
    components: {
        header,
        sidebar,
        footer,
        rightbar,
    }
};
module.exports = App;
</script>
