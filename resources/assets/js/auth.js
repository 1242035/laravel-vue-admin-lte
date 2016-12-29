/**
* @Author: Hong Anh <honganh>
* @Date:   2016-12-27T14:04:23+07:00
* @Email:  chidungdekiemtra@gmail.com
* @Project: Onemax
* @Last modified by:   honganh
* @Last modified time: 2016-12-27T15:08:37+07:00
*/

export default {

    // authentication status
    authenticated: false,

    // Send a request to the login URL and save the returned JWT
    login(context, creds, redirect) {
        context.$http.post('/login', creds, (data) => {
            localStorage.setItem('user', JSON.stringify(data))

            this.authenticated = true
            context.$root.user = data

            // Redirect to a specified route
            if (redirect) {
                router.go(redirect)
            }

        }).error((errors) => {
            context.errors = errors;
        })
    },

    // To log out
    logout: function() {
        localStorage.removeItem('user');
        this.authenticated = false;
        router.go('/login')
    }
}
