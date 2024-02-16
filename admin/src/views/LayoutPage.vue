<script setup>
import SideMenu from '@/components/layout/SideMenu.vue'
import TopHeader from '@/components/layout/TopHeader.vue'
</script>

<template>
  <el-container>
    <SideMenu></SideMenu>
    <el-container direction="vertical">
      <TopHeader></TopHeader>
      <el-main><RouterView></RouterView></el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped></style>
