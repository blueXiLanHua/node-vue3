<script setup>
import { getNewsListService, newsChangeOk, newsDel } from '@/api/newsApi'
import router from '@/router'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const tableData = ref(null)
const getNewsList = async () => {
  const result = await getNewsListService()
  tableData.value = result.data.data
}
getNewsList()

const typeFormat = (val) => {
  const arr = ['最新动态', '典型案例', '通知公告']
  return arr[val]
}
const handleOk = async (val) => {
  await newsChangeOk(val)
  ElMessage.success('更新成功')
}

const isDiaglogShow = ref(false)
const newsPreview = ref(null)
const handlePreview = (index, row) => {
  newsPreview.value = row
  isDiaglogShow.value = true
}
const handleEdit = (index, row) => {
  router.push('/news/edit/' + row._id)
}
const handleDelete = async (index, row) => {
  await newsDel(row)
  ElMessage.success('删除成功')
  getNewsList()
}
</script>

<template>
  <el-card>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="type" label="分类">
        <template #default="scope"> {{ typeFormat(scope.row.type) }} </template>
      </el-table-column>
      <el-table-column prop="editTime" label="更新时间" />
      <el-table-column prop="ok" label="是否发布">
        <template #default="scope">
          <el-switch
            v-model="scope.row.ok"
            :active-value="1"
            :inactive-value="0"
            @change="handleOk(scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handlePreview(scope.$index, scope.row)" type="primary">
            预览
          </el-button>
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)" type="info">
            编辑
          </el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
            删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 预览新闻 -->
    <el-dialog v-model="isDiaglogShow" title="预览新闻">
      <div>
        <h2>{{ newsPreview.title }}</h2>
        <h3 style="font-size: 10px">{{ newsPreview.editTime }}</h3>
        <el-divider />
        <div v-html="newsPreview.content"></div>
      </div>
    </el-dialog>
  </el-card>
</template>

<style lang="scss" scoped></style>
