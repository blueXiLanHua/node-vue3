<script setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import WangEditor from '@/components/WangEditor.vue'
import { newsUpdata, getnewsItemService } from '@/api/newsApi'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { useRoute } from 'vue-router'
const formData = ref({})
const rules = {
  title: [{ required: true, message: '不能为空', trigger: 'blur' }],
  content: [{ required: true, message: '不能为空', trigger: 'blur' }],
  type: [{ required: true, message: '不能为空', trigger: 'blur' }],
  pic: [{ required: true, message: '不能为空', trigger: 'blur' }]
}
const options2 = [
  {
    value: 0,
    label: '最新动态'
  },
  {
    value: 1,
    label: '典型案例'
  },
  {
    value: 2,
    label: '通知公告'
  }
]
const imageUrl = ref('')
const handleChangeAvatar = (file) => {
  imageUrl.value = URL.createObjectURL(file.raw)
  formData.value.file = file.raw
}
const formRef = ref(null)
const submit = async () => {
  await formRef.value.validate()
  const formdata = new FormData()
  //
  console.log(formData.value)
  for (let k in formData.value) {
    formdata.append(k, formData.value[k])
  }
  await newsUpdata(formdata)
  ElMessage.success('保存成功')
  router.push('/news/list')
}

const route = useRoute()
console.log(route.params.id)
const getnewsItem = async () => {
  const result = await getnewsItemService({ _id: route.params.id })
  formData.value = result.data.data
  imageUrl.value = formData.value.pic
}
getnewsItem()
</script>

<template>
  <el-card>
    <el-form label-width="80px" :model="formData" :rules="rules" ref="formRef">
      <el-form-item prop="title" label="标题">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item prop="content" label="内容">
        <WangEditor v-model="formData.content" v-if="formData.content"></WangEditor>
      </el-form-item>
      <el-form-item prop="type" label="类别">
        <el-select v-model="formData.type">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="封面图片">
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
        <el-button @click="submit">保存发布新闻</el-button>
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
