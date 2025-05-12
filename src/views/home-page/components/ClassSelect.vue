<template>
  <div class="class-select">
    <el-row>
      <el-col v-for="i in 48" :key="i" :xs="24" :sm="12" :lg="6">
        <el-card shadow="hover" @click="goDetail(i)">
          <p>第{{ i }}课</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { StudyMode } from '@/utils/enum'

  const router = useRouter()

  const props = defineProps<{
    target?: StudyMode
  }>()

  const goDetail = (i: number) => {
    if (props.target === StudyMode.MEMORIZATION) {
      router.push({
        name: 'TestPage',
        params: {
          id: `xbr-l1-${i.toString().padStart(2, '0')}`,
        },
      })
    } else if (props.target === StudyMode.DICTATION) {
      router.push({
        name: 'DictationPage',
        params: {
          id: `xbr-l1-${i.toString().padStart(2, '0')}`,
        },
      })
    }
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
