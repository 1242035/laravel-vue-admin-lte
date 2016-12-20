require('./bootstrap');

const App = require('./App.vue');

const router = require('./router');

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
