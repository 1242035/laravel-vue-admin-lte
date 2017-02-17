/**
* @Author: Hong Anh <honganh>
* @Date:   2016-12-27T09:52:18+07:00
* @Email:  chidungdekiemtra@gmail.com
* @Project: Onemax
* @Last modified by:   onemax
* @Last modified time: 2017-02-17T14:49:25+07:00
*/

module.exports = {
    routes: [
        { path: '/', component: require('./components/dashboard/index.vue') },
        { path:'/users',component:require('./components/dashboard/user.vue') },
        { path:'/posts',component:require('./components/dashboard/post.vue') },
        { path:'/categories',component:require('./components/dashboard/category.vue') },
        { path:'/pages',component:require('./components/dashboard/page.vue') },
        { path:'/media',component:require('./components/dashboard/media.vue') },
    ]
}
