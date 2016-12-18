require('./bootstrap')

const App = require('./App.vue');

// Plugins
const router = require('./router');
/* eslint-disable no-new */

new Vue({
  router,
  render: function(createElement){
      return App;
      return createElement(App);
  }
}).$mount('#app');
