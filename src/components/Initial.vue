<template>
  <div class="initial">
    <div class="charactor">
      <img src="" alt="">
    </div>
    <div class="name">
      <input type="text" value="default" />
    </div>
    <div class="gender">
      <span class="selected">男</span>
      <span>女</span>
    </div>
    <div class="map">
      <tab :title="tab.title" :page="tab.page" :totalTab="tab.totalTab" @leftTabClick="leftTabClick" @rightTabClick="rightTabClick"></tab>
      <div class="tab-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      default: '江户城俊介'
    }
  }
}
</script>

<style scoped>
</style>
