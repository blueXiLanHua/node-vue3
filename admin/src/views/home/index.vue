<script setup>
import { useUserStore } from '@/stores'
import { computed, ref } from 'vue'
import { getProductListService } from '@/api/product'

const UserStore = useUserStore()
const welcomeSlog = computed(() => {
  return new Date().getHours() < 12 ? '早上好啊' : '下午好啊'
})

const tableData = ref()
const getProductList = async () => {
  const result = await getProductListService()
  tableData.value = result.data.data
  console.log(tableData.value)
}
getProductList()
</script>

<template>
  <el-card class="welcome-card" shadow="always">
    <el-avatar
      :size="80"
      :src="
        UserStore.userInfo.avatar
          ? UserStore.userInfo.avatar
          : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      "
    />
    <span class="welcome">
      欢迎回来,{{ UserStore.userInfo.username }}, {{ welcomeSlog }}
    </span>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>公司产品</span>
      </div>
    </template>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in tableData" :key="item._id">
        <div
          :style="{
            backgroundImage: `url(${item.productPic})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }"
        >
          <h3 text="2xl" justify="center">{{ item.productName }}</h3>
        </div>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<style lang="scss" scoped>
.welcome-card {
  :deep(.el-card__body) {
    display: flex;
    align-items: center;
  }
  .welcome {
    margin-left: 50px;
  }
}

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
