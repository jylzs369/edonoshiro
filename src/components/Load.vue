<template>
  <div class="load">
    <ul class="record-list">
      <li @click="" v-for="record in records">
        <h5>title</h5>
        <span>time</span>
        <p>content</p>
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
  }
}
</script>

<style scoped>
</style>
