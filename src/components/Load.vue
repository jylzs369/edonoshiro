<template>
  <div class="load">
    <h2>
      <button class="arrow-left"></button>
      存档<span>1/2</span>
      <button class="arrow-right"></button>
    </h2>
    <p class="color-blue">读取存档</p>
    <ul class="record-list" v-for="(record, index) in records" :key="index">
      <li v-if="record.title" @click="load">
        <h5>
          <i class="icon icon-auto-save"></i>
          <span>{{ record.title }}</span>
        </h5>
        <p><span class="fl">{{ record.time }}</span><span class="fr">{{ record.money }}</span></p>
      </li>
      <li v-else @click="newRecord">
        <h5><i class="icon icon-auto-save"></i>无存档</h5>
      </li>
      <li v-if="record.title" @click="load">
        <h5>
          <i class="icon icon-save"></i>
          <span>{{ record.title }}</span>
        </h5>
        <p><span class="fl">{{ record.time }}</span><span class="fr">{{ record.money }}</span></p>
      </li>
      <li v-else @click="newRecord">
        <h5><i class="icon icon-save"></i>空白存档</h5>
      </li>
    </ul>
    <p class="color-green">请选择</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      records: []
    }
  },
  methords: {
    newRecord () {
    },
    load () {
      this.$router.replace({
        name: 'Main'
      })
    }
  },
  created () {
    this.records = [
      {
        title: '江户城大院',
        time: '16年 4月1周',
        money: '1,300两'
      }
    ]
  }
}
</script>

<style scoped>
</style>
