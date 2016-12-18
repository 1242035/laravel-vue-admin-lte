window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');
require('vue-resource');

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */
Vue.config.devtools = true;
Vue.config.debug = true;
Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', App.csrfToken);
    next();
});

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
window.Chart = require('chart.js')
window.FastClick = require('fastclick')

require('../assets/plugins/sparkline/jquery.sparkline.min.js')
require('../assets/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js')
require('../assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js')
require('../assets/plugins/slimScroll/jquery.slimscroll.min.js')

require('../static/js/app.min.js')
// require('../static/js/pages/dashboard2.js')
// require('../static/js/demo.js')
