<script setup>
import router from '@/router'
import { ref } from 'vue'
import { getProductListService, delProductItemService } from '@/api/product'
import { ElMessage } from 'element-plus'
const tableData = ref([{}])

const getProductList = async () => {
  const result = await getProductListService()
  tableData.value = result.data.data
}
getProductList()

const handleEdit = (index, row) => {
  router.push('/product/edit/' + row._id)
}
const handleDelete = async (index, row) => {
  console.log(row._id)
  await delProductItemService({ _id: row._id })
  ElMessage.success('删除成功')
  getProductList()
}
</script>

<template>
  <el-card>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="productName" label="产品名称" />
      <el-table-column prop="easyIntroduction" label="简要描述"> </el-table-column>
      <el-table-column prop="editTime" label="更新时间" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)" type="info">
            编辑
          </el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
            删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style lang="scss" scoped></style>
