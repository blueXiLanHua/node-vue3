<script setup>
import router from '@/router'
import { useRouteStateStore, useUserStore } from '@/stores'
import { Switch, Mug } from '@element-plus/icons-vue'
const UserStore = useUserStore()
const quit = () => {
  useUserStore().setToken('')
  useUserStore().setUserInfo({})
  router.push('/login')
}
</script>

<template>
  <div class="topheader">
    <el-header>
      <div class="left">
        <el-icon @click="useRouteStateStore().changCollapse()"><Switch /></el-icon>
      </div>
      <div class="right">
        <span>欢迎{{ UserStore.userInfo.username }}回来</span>
        <el-dropdown style="margin-left: 50px">
          <el-icon size="20"><Mug /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="router.push('/center/index')">个人中心</el-dropdown-item>
              <el-dropdown-item @click="quit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
  </div>
</template>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  .right {
    display: flex;
    align-items: center;
  }
}
</style>
