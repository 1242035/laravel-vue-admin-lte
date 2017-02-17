/**
* @Author: Hong Anh <honganh>
* @Date:   2016-12-27T09:52:18+07:00
* @Email:  chidungdekiemtra@gmail.com
* @Project: Onemax
* @Last modified by:   onemax
* @Last modified time: 2017-02-17T15:50:01+07:00
*/

require('./bootstrap');

// Import the actual routes, aliases, ...
const configRouter = require('./routes');

// Create our router object and set options on it
const router = new VueRouter(configRouter);

const App = Vue.extend(require('./app.vue'));

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
