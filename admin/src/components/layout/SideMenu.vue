<script setup>
import { House, User, Star, Compass, Edit } from '@element-plus/icons-vue'
import { useRouteStateStore, useUserStore } from '@/stores'
const vAdmin = {
  mounted: (el) => {
    if (useUserStore().userInfo.role === 0) {
      el.parentNode.removeChild(el)
    }
  }
}
</script>

<template>
  <div class="sidemenu">
    <el-aside :width="useRouteStateStore().isCollapse ? '64px' : '200px'">
      <el-menu
        router
        :default-active="$route.fullPath"
        :collapse="useRouteStateStore().isCollapse"
        :collapse-transition="false"
      >
        <el-menu-item index="/home/index">
          <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/center/index">
          <el-icon><User /></el-icon>
          <span>个人中心</span>
        </el-menu-item>
        <el-sub-menu index="/user" v-admin>
          <template #title>
            <el-icon><Star /></el-icon>
            <span>用户中心</span>
          </template>
          <el-menu-item index="/user/add">添加用户</el-menu-item>
          <el-menu-item index="/user/list">用户列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/news">
          <template #title>
            <el-icon><Compass /></el-icon>
            <span>新闻管理</span>
          </template>
          <el-menu-item index="/news/add">添加新闻</el-menu-item>
          <el-menu-item index="/news/list">新闻列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/product">
          <template #title>
            <el-icon><Edit /></el-icon>
            <span>产品管理</span>
          </template>
          <el-menu-item index="/product/add">添加产品</el-menu-item>
          <el-menu-item index="/product/list">产品列表</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
  </div>
</template>

<style lang="scss" scoped>
.sidemenu {
  .el-aside {
    height: 100vh;
    .el-menu {
      margin-top: 60px;
      border: 0;
    }
  }
}
</style>
