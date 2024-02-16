<script setup>
import { computed, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import axios from 'axios'
import _ from 'lodash'
import { useRouter } from 'vue-router'
const router = useRouter()

const serachInput = ref('')
const visibleShow = ref(false)

const newsList = ref([])
const getList = async () => {
  const result = await axios({
    url: '/api/webapi/news/getlist'
  })
  newsList.value = result.data.data
  console.log(_.groupBy(newsList.value, (item) => item.type))
}
getList()
const serachList = computed(() => {
  if (serachInput.value === '') {
    return []
  }
  return newsList.value.filter((item) => {
    return item.title.includes(serachInput.value)
  })
})

const activeName = ref('0')
const tablist = [
  { label: '最新动态', name: '0' },
  { label: '典型案例', name: '1' },
  { label: '通知公告', name: '2' }
]
const tabNews = computed(() => _.groupBy(newsList.value, (item) => item.type))

const getNews = (_id) => {
  router.push(`/news/${_id}`)
}
</script>

<template>
  <div class="container">
    <div class="news-header">
      <span>新闻</span>
      <div class="serach">
        <el-popover
          placement="bottom"
          title="检索内容"
          width="50%"
          :visible="visibleShow"
        >
          <ul v-if="serachList.length">
            <li
              v-for="item in serachList"
              :key="item.title"
              @click="getNews(item._id)"
            >
              新闻标题 {{ item.title }}
            </li>
          </ul>
          <div v-else>空空如也</div>
          <template #reference>
            <el-input
              v-model="serachInput"
              placeholder="请输入要搜索的内容"
              :prefix-icon="Search"
              type="search"
              @input="visibleShow = true"
              @blur="visibleShow = false"
            />
          </template>
        </el-popover>
      </div>
    </div>
    <div class="top-news">
      <el-row :gutter="20">
        <el-col
          :span="6"
          v-for="item in newsList"
          :key="item._id"
          style="margin-top: 10px"
          @click="getNews(item._id)"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div
              class="img"
              :style="{ backgroundImage: `url(${item.pic})` }"
            ></div>
            <div style="padding: 14px">
              <span>{{ item.title }}</span>
              <div>
                <time class="time">{{ item.editTime }}</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-tabs v-model="activeName" style="margin-top: 20px">
      <el-tab-pane
        :label="item.label"
        :name="item.name"
        v-for="item in tablist"
        :key="item.name"
        class="hezi"
      >
        <div
          v-for="data in tabNews[item.name]"
          :key="data._id"
          style="height: 100px; flex: 1; background-color: pink; margin: 5px"
          @click="getNews(data._id)"
        >
          <div
            :style="{
              height: '50px',
              backgroundImage: `url(${data.pic})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }"
          ></div>
          <div>标题:{{ data.title }}</div>
          <div>创建事件:{{ data.editTime }}</div>
        </div>
        <el-timeline>
          <el-timeline-item
            v-for="data in tabNews[item.name]"
            :key="data._id"
            :timestamp="data.editTime"
          >
            {{ data.title }}
          </el-timeline-item>
        </el-timeline>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.news-header {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: pink;
  text-align: center;
  .serach {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.img {
  width: 100%;
  height: 200px;
  background-size: 100% 100%;
}
.hezi {
  display: flex;
  justify-content: space-between;
}
</style>
