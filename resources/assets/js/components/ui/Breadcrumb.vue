<template>
  <ol class="breadcrumb">
    <li v-for="item in itens" v-bind:class="{ active: item.active }">
      <router-link :to="item.url || ''">
        <i v-if="item.icon" v-bind:class="item.icon"></i>
        {{ item.title}}
      </router-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: ['itens']
}
</script>
