<template>
  <div class="load">
    <h2>
      <button class="arrow-left"></button>
      存档<span>1/2</span>
      <button class="arrow-right"></button>
    </h2>
    <p>读取存档</p>
    <ul class="record-list" v-for="record in records">
      <li v-if="record.title" @click="">
        <h5><i class="icon icon-auto-save"></i>title</h5>
        <p><span class="fl">time</span><span class="fr">money</span></p>
      </li>
      <li v-else>
        <h5><i class="icon icon-auto-save"></i>无存档</h5>
      </li>
      <li v-if="record.title" @click="">
        <h5><i class="icon icon-save"></i>title</h5>
        <p><span class="fl">time</span><span class="fr">money</span></p>
      </li>
      <li v-else @click="newRecord">
        <h5><i class="icon icon-save"></i>空白存档</h5>
      </li>
    </ul>
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
    }
  }
}
</script>

<style scoped>
</style>
