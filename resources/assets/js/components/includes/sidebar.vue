<template>
    <div class="sidebar">
        <ul class="nav nav-sidebar">
            <li class="title">Menu <i class="fa fa-bars" aria-hidden="true"></i></li>
            <li>
                <router-link :to="{ path: '/',  activeClass: 'active'}">Home</router-link>
            </li>
            <li>
            	<router-link :to="{ path: '/posts',  activeClass: 'active'}">Posts</router-link>
            </li>
            <li>
            	<router-link :to="{ path: '/media',  activeClass: 'active'}">Media</router-link>
            </li>
            <li>
            	<router-link :to="{ path: '/categories',  activeClass: 'active'}">Categories</router-link>
            </li>
            <li>
            	<router-link :to="{ path: '/pages',  activeClass: 'active'}">Pages</router-link>
            </li>
            <li>
            	<router-link :to="{ path: '/users',  activeClass: 'active'}">Users</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'sidebar',
    }
</script>
<style lang="scss">
li.seperator {
    background:#313d4f;
    height:1px;
    margin:20px 0;
}
li.title {
    color: #5b6779;
    text-transform: uppercase;
    font-size: 12px;
    margin: 30px 30px 15px 6px;
    font-weight: 700;
    list-style: none;
    border:none;
    i {
        float:right;
        font-size:14px;
        line-height: 17.5px;
    }
    &:hover {
        background:none;
        border:none;
    }
}
</style>
