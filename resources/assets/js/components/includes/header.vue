<template>
    <div class="header">
        <ul class="nav nav-header">
            
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'header',
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
