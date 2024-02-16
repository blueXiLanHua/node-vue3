<script setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { userAddService } from '@/api/userApi'
import router from '@/router'
const ruleForm = ref({
  username: '',
  password: '',
  gender: 0,
  introduction: '',
  avatar: '',
  role: 0,
  file: null
})
const rules = {
  username: [{ required: true, message: '不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '不能为空', trigger: 'blur' }],
  gender: [{ required: true, message: '不能为空', trigger: 'blur' }],
  introduction: [{ required: true, message: '不能为空', trigger: 'blur' }],
  file: [{ required: true, message: '不能为空', trigger: 'blur' }],
  role: [{ required: true, message: '不能为空', trigger: 'blur' }]
}

const options = [
  {
    value: 0,
    label: '保密'
  },
  {
    value: 1,
    label: '男'
  },
  {
    value: 2,
    label: '女'
  }
]

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

const imageUrl = ref('')
const handleChangeAvatar = (file) => {
  imageUrl.value = URL.createObjectURL(file.raw)
  ruleForm.value.file = file.raw
}
const formRef = ref(null)
const submit = async () => {
  await formRef.value.validate()
  const formData = new FormData()
  for (let k in ruleForm.value) {
    formData.append(k, ruleForm.value[k])
  }
  await userAddService(formData)
  ElMessage.success('添加成功')
  router.push('/user/list')
}
</script>

<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>个人信息</span>
      </div>
    </template>

    <!-- 表单 -->
    <el-form :model="ruleForm" :rules="rules" label-width="120px" ref="formRef">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="ruleForm.gender">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="角色" prop="role">
        <el-select v-model="ruleForm.role">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="个人简介" prop="introduction">
        <el-input :rows="5" type="textarea" v-model="ruleForm.introduction"></el-input>
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :on-change="handleChangeAvatar"
          :auto-upload="false"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">添加用户</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep(.avatar) {
    width: 178px;
    height: 178px;
    display: block;
  }
}
.avatar-uploader {
  :deep(.el-upload) {
    border: 1px dashed var(--el-color-primary);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }
}
.avatar-uploader {
  :deep(.el-upload:hover) {
    border-color: var(--el-color-primary);
  }
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
