<script setup></script>

<template>
  <div class="navbar">
    <el-menu :default-active="$route.fullPath" router mode="horizontal">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/news">新闻</el-menu-item>
      <el-menu-item index="product">产品</el-menu-item>
    </el-menu>
    <div class="right">月球新闻发布中心</div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0px;
  z-index: 1000;
  .right {
    position: fixed;
    top: 0;
    right: 60px;
    height: 60px;
    line-height: 60px;
  }
}
</style>
