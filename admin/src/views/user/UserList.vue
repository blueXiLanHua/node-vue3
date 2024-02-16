<script setup>
import { userListService, userDelListService, userUploadUserInfo } from '@/api/userApi'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const tableData = ref([])
const getList = async () => {
  const result = await userListService()
  tableData.value = result.data.data
}
getList()

const isDiaglogShow = ref(false)
const options2 = [
  {
    value: 0,
    label: '编辑'
  },
  {
    value: 1,
    label: '管理员'
  }
]
const ruleFormRef = ref(null)
const editInfo = ref({})
const rules = {
  username: [{ required: true, message: '不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '不能为空', trigger: 'blur' }],
  role: [{ required: true, message: '不能为空', trigger: 'blur' }],
  introduction: [{ required: true, message: '不能为空', trigger: 'blur' }]
}
const handleEdit = (index, row) => {
  isDiaglogShow.value = true
  editInfo.value = row
}
const upDate = async () => {
  await ruleFormRef.value.validate()
  isDiaglogShow.value = false
  console.log(editInfo.value)
  await userUploadUserInfo(editInfo.value)
  ElMessage.success('更新成功')
}
const handleDel = async (index, row) => {
  await ElMessageBox.confirm('你确定要删除吗', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
  await userDelListService(row._id)
  ElMessage.success('删除成功')
  getList()
}
</script>

<template>
  <el-card>
    <template #header>
      <span>用户列表</span>
    </template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="avatar" label="头像">
        <template #default="scope">
          <el-avatar
            :size="30"
            :src="
              scope.row.avatar
                ? scope.row.avatar
                : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
            "
          />
        </template>
      </el-table-column>
      <el-table-column prop="role" label="角色">
        <template #default="scope">
          <el-tag :type="scope.row.role === 1 ? 'primary' : 'info'">{{
            scope.row.role === 1 ? '管理员' : '编辑者'
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)" type="primary">
            编辑
          </el-button>
          <el-button size="small" @click="handleDel(scope.$index, scope.row)" type="danger">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑 -->
    <el-dialog v-model="isDiaglogShow" title="编辑用户">
      <el-form ref="ruleFormRef" :model="editInfo" :rules="rules" label-width="80px">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="editInfo.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="editInfo.password"></el-input>
        </el-form-item>
        <el-form-item prop="role" label="角色">
          <el-select v-model="editInfo.role">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item prop="introduction" label="个人简介">
          <el-input type="textarea" v-model="editInfo.introduction"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="isDiaglogShow = false">取消</el-button>
          <el-button type="primary" @click="upDate"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </el-card>
</template>

<style lang="scss" scoped></style>
