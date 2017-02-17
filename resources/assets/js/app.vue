<template>
    <section class="row">
        <div class="col-md-12">
            <headerbar></headerbar>
        </div>
        <div class="col-md-12">
            <div class="col-md-2">
                <sidebar></sidebar>
            </div>
            <div class="col-md-10">
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

    export default {
        components: {headerbar, sidebar, footerbar },

        methods: {

        },
        ready: function() {

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
