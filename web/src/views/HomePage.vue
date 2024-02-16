<script setup>
import image1 from '@/assets/1.png'
import image2 from '@/assets/2.png'
</script>

<template>
  <div class="container">
    <el-carousel height="80vh">
      <el-carousel-item :key="1">
        <!-- 直接使用变量作为背景图片 -->
        <div :style="{ backgroundImage: 'url(' + image1 + ')' }"></div>
      </el-carousel-item>
      <el-carousel-item :key="2">
        <!-- 直接使用变量作为背景图片 -->
        <div :style="{ backgroundImage: 'url(' + image2 + ')' }"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.el-carousel {
  div {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
