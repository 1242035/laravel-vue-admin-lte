/**
* @Author: Hong Anh <honganh>
* @Date:   2016-12-27T09:52:18+07:00
* @Email:  chidungdekiemtra@gmail.com
* @Project: Onemax
* @Last modified by:   honganh
* @Last modified time: 2016-12-28T10:13:36+07:00
*/

module.exports = {

    configRouter: function (router) {

        router.map({
         '/login': {
              component: require('./components/includes/login.vue')
          },
	      '/dashboard': {
	        component: require('./components/dashboard/index.vue'),
		        subRoutes: {
		          '/': {
		            component: require('./components/dashboard/index.vue')
		          },
		          '/analytics': {
		            component: require('./components/dashboard/analytics.vue')
		          }
		        }
	       },
          '/analytics': {
            component: require('./components/dashboard/analytics.vue')
          },
          '/crm': {
            component: require('./components/contacts/index.vue'),
          },
            '/crm/detail/id/:id': {
                name: 'contactDetail',
                component: require('./components/contacts/detail.vue')
            },
          '/system/settings': {
            component: require('./components/system/settings.vue')
          },
          '/system/company': {
            component: require('./components/system/company.vue')
          },
          '/system/usermanagement': {
            component: require('./components/system/users.vue')
          }
        })

        router.alias({
            '': '/dashboard'
        })
    }
}
