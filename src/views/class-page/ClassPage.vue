<template>
  <div class="class-page">
    <el-row>
      <el-col :span="6" v-for="i in 24" :key="i">
        <el-card shadow="hover" @click="goDetail(i)">
          <p>第{{ i }}课</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const goDetail = (i: number) => {
    router.push({
      name: 'TestPage',
      params: {
        id: i,
      },
    })
  }
</script>

<style scoped lang="less">
  .el-col {
    padding: 10px;
  }

  .el-card {
    cursor: pointer;
  }
</style>
