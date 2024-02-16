<script setup>
import axios from 'axios'
import { ref } from 'vue'

const productList = ref([])
const getProduct = async () => {
  const result = await axios({
    url: '/api/webapi/product//getlist'
  })
  productList.value = result.data.data
  console.log(productList.value)
}
getProduct()
</script>

<template>
  <div>
    <el-carousel height="600px" direction="vertical">
      <el-carousel-item v-for="item in productList" :key="item._id">
        <div
          :style="{
            backgroundImage: `url(${item.productPic})`,
            height: '100%',
            backgroundSize: '100% 100%'
          }"
        >
          <div>产品名称:{{ item.productName }}</div>
          <div>发布日期:{{ item.editTime }}</div>
          <div>产品简介:{{ item.easyIntroduction }}</div>
          <div>产品介绍:{{ item.introduction }}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
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
