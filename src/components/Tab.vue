<template>
  <div class="tab">
    <div class="tab-nav">
      <h2>
        <button class="arrow-left" @click="leftTabClick"></button>
        {{ title }} <span v-if="page">{{ currTab }}/{{ totalTab }}</span>
        <button class="arrow-right" @click="rightTabClick"></button>
      </h2>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    page: {
      type: Boolean,
      default: false
    },
    totalTab: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      currTab: 1
    }
  },
  methods: {
    leftTabClick () {
      if (this.currTab > 1) {
        this.currTab--
        this.$emit('leftTabClick')
      }
    },
    rightTabClick () {
      if (this.currTab < this.totalTab) {
        this.currTab++
        this.$emit('rightTabClick')
      }
    }
  },
  created () {
  }
}
</script>