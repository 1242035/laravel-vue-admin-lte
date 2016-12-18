<template>
  <div class="infobox">
    <div class="col-md-3 col-sm-6 col-xs-12" v-for="item in itens">
      <div class="info-box">
        <span class="info-box-icon" v-bind:class="item.color">
          <i v-bind:class="item.icon"></i>
        </span>

        <div class="info-box-content">
          <span class="info-box-text">{{ item.text }}</span>
          <span class="info-box-number" v-html="item.number"></span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itens: [
        {
          color: 'bg-aqua',
          icon: 'ion ion-ios-gear-outline',
          text: 'CPU Traffic',
          number: '90<small>%</small>'
        },
        {
          color: 'bg-red',
          icon: 'fa fa-google-plus',
          text: 'Likes',
          number: '41,410'
        },
        {
          color: 'bg-green',
          icon: 'ion ion-ios-cart-outline',
          text: 'Vendas',
          number: '760'
        },
        {
          color: 'bg-yellow',
          icon: 'ion ion-ios-people-outline',
          text: 'New Members',
          number: '2,000'
        }
      ]
    }
  }
}
</script>
