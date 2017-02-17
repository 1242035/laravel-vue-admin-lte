/**
* @Author: Onemax <onemax>
* @Date:   2016-12-29T10:28:42+07:00
* @Email:  hotro@onemax.com.vn
* @Project: Onemax
* @Last modified by:   onemax
* @Last modified time: 2017-02-17T12:40:26+07:00
* @Copyright: Onemax.ltd.co
*/

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
window.VueResource = require('vue-resource');
window.VueI18n = require('vue-i18n');
window.VueRouter = require('vue-router');

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Token.csrfToken);
    next();
});
Vue.config.debug = true;
Vue.config.devtools = true;
Vue.config.lang = 'en';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
