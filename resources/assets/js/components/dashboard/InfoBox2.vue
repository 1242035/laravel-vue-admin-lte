<template>
  <div class="infobox2">
    <div v-for="item in itens" class="info-box" v-bind:class="item.color">
      <span class="info-box-icon" v-if="item.icon"><i v-bind:class="item.icon"></i></span>

      <div class="info-box-content">
        <span class="info-box-text">{{ item.text }}</span>
        <span class="info-box-number">{{ item.number }}</span>

        <div class="progress" v-if="item.progress">
          <div class="progress-bar" v-bind:style="{ width: item.progress.size }">
          </div>
        </div>
        <span class="progress-description" v-if="item.progress">
          {{ item.progress.text }}
        </span>
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
          color: 'bg-yellow',
          icon: 'ion ion-ios-pricetag-outline',
          text: 'Inventory',
          number: '5200',
          progress: {
            size: '50%',
            text: '50% Increase in 30 Days'
          }
        },
        {
          color: 'bg-green',
          icon: 'ion ion-ios-heart',
          text: 'Mentions',
          number: '92,050',
          progress: {
            size: '20%',
            text: '20% Increase in 30 Days'
          }
        },
        {
          color: 'bg-red',
          icon: 'ion ion-ios-cloud',
          text: 'Downloads',
          number: '114,381',
          progress: {
            size: '70%',
            text: '70% Increase in 30 Days'
          }
        },
        {
          color: 'bg-aqua',
          icon: 'ion-ios-chatbubble-outline',
          text: 'Direct',
          number: '163,921',
          progress: {
            size: '40%',
            text: '40% Increase in 30 Days'
          }
        },
        ]
      }
    }
  }
</script>
