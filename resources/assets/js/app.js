/**
* @Author: Hong Anh <honganh>
* @Date:   2016-12-27T09:52:18+07:00
* @Email:  chidungdekiemtra@gmail.com
* @Project: Onemax
* @Last modified by:   onemax
* @Last modified time: 2016-12-29T10:53:03+07:00
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueValidator from 'vue-validator';
var VueI18n = require('vue-i18n');

Vue.use(require('vue-resource'));
Vue.use(require('vue-router'));
Vue.use(VueValidator);
Vue.use(VueI18n);

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name=csrf-token]').getAttribute('value');

Vue.config.debug = true;
Vue.config.devtools = true;
Vue.config.lang = 'en';


// Import the actual routes, aliases, ...
import { configRouter } from './routes'

// Create our router object and set options on it
const router = new VueRouter()

// Inject the routes into the VueRouter object
configRouter(router);

// Import language file
import locales from './lang'

// set locales
// RECOMMEND: 3.0 or later
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

import auth from './auth'

// Bootstrap the app
//Vue.component('nav-component', require('./components/site-header/index.vue'))
const App = Vue.extend(require('./app.vue'))

router.beforeEach(function (transition) {
    if (transition.to.auth && !Auth.authenticated) {
        // if route requires auth and user isn't authenticated
        transition.redirect('/login')
    } else {
        transition.next()
    }
})

router.start(App, '#app')
