<template>
  <div class="load">
    <tab :title="tab.title" :page="tab.page" :totalTab="tab.totalTab" @leftTabClick="leftTabClick" @rightTabClick="rightTabClick"></tab>
    <div class="tab-content-wrap">
      <ul class="tab-content record-list" v-for="(record, index) in records" :key="index" v-show="currentRecord - 1 === index">
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
    </div>
  </div>
</template>

<script>
import Tab from '@/components/Tab.vue'
export default {
  components: {
    Tab
  },
  data () {
    return {
      records: [],
      currentRecord: 1,
      tab: {
        title: '存档',
        page: true,
        totalTab: 1
      }
    }
  },
  methods: {
    newRecord () {
      this.initialModal = true
    },
    load () {
      this.$router.replace({
        name: 'Main'
      })
    },
    leftTabClick () {
      if (this.currentRecord > 1) {
        this.currentRecord--
      }
    },
    rightTabClick () {
      if (this.currentRecord < this.records.length) {
        this.currentRecord++
      }
    }
  },
  created () {
    this.records = [
      {
        title: '江户城大院',
        time: '16年 4月1周',
        money: '1,300两'
      },
      {
        title: '',
        time: '',
        money: ''
      }
    ]
    this.tab.totalTab = parseInt(this.records.length)
  }
}
</script>

<style scoped>
</style>
