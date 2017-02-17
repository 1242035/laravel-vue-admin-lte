<template>
<div>
    {{ users }}
</div>

</template>
<script>

export default {
	name: 'user',
    data: function () {
        return {
            users:{}
        };
    },
    mounted: function () {
        this.getUsers();
    },
    methods: {
        getUsers: function () {

        this.$http
            .get('/api/users', function(data){
                this.users = data;
            });
        }
    }
}
</script>
