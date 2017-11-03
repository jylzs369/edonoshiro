<template>
  <div class="start">
    <header></header>
    <div class="menu">
      <button class="block" @click="load">开始</button>
      <button @click=“viewScore”>高分榜</button>
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
    },
    viewScore () }
  }
}
</script>

<style scoped>
  @import '../assets/css/reset.css';
  @import '../assets/css/base.css';
  @import '../assets/css/start.css';
</style>
