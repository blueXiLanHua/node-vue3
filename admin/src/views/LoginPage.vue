<script setup>
import router from '@/router'
import { loadFull } from 'tsparticles'
import { ref } from 'vue'
import { userLoginService } from '@/api/userApi'
import { useUserStore, useRouteStateStore } from '@/stores'

const particlesInit = async (engine) => {
  await loadFull(engine)
}
const options = {
  particles: {
    number: {
      value: 100
    },
    color: {
      value: '#ffffff'
    },
    links: {
      enable: true,
      distance: 200
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 1
    },
    size: {
      value: {
        min: 1,
        max: 6
      }
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  background: {
    color: '#000000'
  },
  poisson: {
    enable: true
  }
}
const ruleForm = ref({
  username: '',
  password: ''
})
const rules = {
  username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
}

const formRef = ref(null)
const login = async () => {
  await formRef.value.validate()
  const result = await userLoginService(ruleForm.value)
  const UserStore = useUserStore()
  UserStore.setUserInfo(result.data.data)
  useRouteStateStore().setRouteState(false)
  ElMessage.success('登陆成功')
  router.push('/')
}
</script>

<template>
  <div class="login-page">
    <vue-particles id="tsparticles" :particlesInit="particlesInit" :options="options" />
    <div class="form">
      <el-form :model="ruleForm" :rules="rules" ref="formRef">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-self: center;
  height: 100vh;
  .form {
    display: flex;
    align-items: center;
    .el-form {
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
