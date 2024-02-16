<script setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { productAddService } from '@/api/product'
import router from '@/router'
const ruleForm = ref({
  productName: '',
  easyIntroduction: '',
  introduction: '',
  productPic: '',
  file: null
})
const rules = {
  productName: [{ required: true, message: '不能为空', trigger: 'blur' }],
  easyIntroduction: [{ required: true, message: '不能为空', trigger: 'blur' }],
  introduction: [{ required: true, message: '不能为空', trigger: 'blur' }]
}
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
  await productAddService(formData)
  ElMessage.success('添加成功')
  router.push('/product/list')
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
      <el-form-item label="产品名称" prop="productName">
        <el-input v-model="ruleForm.productName"></el-input>
      </el-form-item>
      <el-form-item label="产品简要描述" prop="easyIntroduction">
        <el-input :rows="5" type="textarea" v-model="ruleForm.easyIntroduction"></el-input>
      </el-form-item>

      <el-form-item label="产品详细描述" prop="introduction">
        <el-input :rows="5" type="textarea" v-model="ruleForm.introduction"></el-input>
      </el-form-item>
      <el-form-item label="产品图片" prop="productPic">
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
        <el-button type="primary" @click="submit">添加产品</el-button>
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
