<template>
  <div class="start">
    <header></header>
    <div class="menu">
      <button @click="load">开始</button>
      <!-- <button>高分榜</button>-->
    </div>
    <load v-show="loadModal"></load>
    <initial v-show="initialModal"></initial>
    <footer></footer>
  </div>
</template>

<script>
import Initial from '@/components/Initial.vue' 
import Load from '@/components/Load.vue'

export default {
  name: 'start',
  components: {
    Initial,
    Load
  },
  data () {
    return {
      loadModal: false,
      initialModal: false
    }
  },
  methods: {
    load () {
      this.loadModal = true
    }
  }
}
</script>

<style scoped>
</style>
