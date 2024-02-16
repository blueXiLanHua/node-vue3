<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const text = ref()
const getNewsItem = async () => {
  const result = await axios({
    url: '/api/webapi/news/getItem',
    params: {
      _id: useRoute().params.id
    }
  })
  text.value = result.data.data
  console.log(text.value)
}
getNewsItem()
</script>

<template>
  <div>标题:{{ text.title }}</div>
  <div>时间:{{ text.editTime }}</div>
  <div v-html="text.content"></div>
</template>

<style lang="scss" scoped></style>
