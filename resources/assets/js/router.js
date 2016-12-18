const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter)

// Components
const Home = require('./components/Home.vue');
const Dashboard2 = require('./components/Dashboard2.vue');
const Widgets = require('./components/Widgets.vue');
const Charts = require('./components/Charts.vue');


const router = new VueRouter({
  history: true,
	saveScrollPosition: true,
	root: '/',
  routes: [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard2 },
    { path: '/widgets', component: Widgets },
    { path: '/charts', component: Charts }
  ]
});

module.exports = router;
