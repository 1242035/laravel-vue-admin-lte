<template>
    <section class="row">
        <div class="col-md-12">
            <headerbar></headerbar>
        </div>
        <div class="col-md-12">
            <div class="col-md-3">
                <sidebar></sidebar>
            </div>
            <div class="col-md-9">
            	<div class="main">
            		<router-view></router-view>
            	</div>
        	</div>
        </div>
        <div class="col-md-12">
            <footerbar></footerbar>
        </div>
    </section>
</template>

<script>
    import headerbar from './components/includes/header.vue';
    import sidebar from './components/includes/sidebar.vue';
    import footerbar from './components/includes/footer.vue';
    import Auth from './auth'
    import store from './vuex/store'

    export default {
        components: {headerbar, sidebar, footerbar },
        store: store ,
        data: function() {
            return { user: {} };
        },
        computed: {
            auth: function() {
                return Auth;
            }
        },
        methods: {
            checkLocalStorage: function() {
                if (localStorage.user) {
                    this.user = JSON.parse(localStorage.user);
                    //Vue.http.headers.common['Authorization'] = 'Bearer ' + this.user.api_token;
                    Auth.authenticated = true;
                }
            },
            logout: function() {
                this.user = {};
                Auth.logout();
            }
        },
        ready: function() {
            this.checkLocalStorage();
        }
    };
</script>

<style>
.main > div > .box {
    position: fixed;
    height: calc(100% - 220px);
    width: calc(100% - 270px);
    top: 160px;
    overflow: auto;
    z-index: 1;
}
</style>
