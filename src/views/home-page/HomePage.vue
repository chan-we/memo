<template>
  <div class="home-page">
    <div class="study-line">
      <el-button type="primary" plain @click="goLearn">学习</el-button>
      <el-button type="primary" plain @click="goDictation">听写</el-button>
    </div>
    <el-drawer
      v-model="showClassDrawer"
      direction="btt"
      size="100%"
      title="选择课程"
    >
      <ClassSelect :target="target" />
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import ClassSelect from './components/ClassSelect.vue'
  import { StudyMode } from '@/utils/enum'

  const showClassDrawer = ref(false)
  const target = ref<StudyMode>()

  const goLearn = () => {
    target.value = StudyMode.MEMORIZATION

    showClassDrawer.value = true
  }

  const goDictation = () => {
    target.value = StudyMode.DICTATION
    showClassDrawer.value = true
  }
</script>

<style scoped lang="less">
  .home-page {
    height: 100%;

    .study-line {
      display: flex;
      justify-content: space-around;
      position: relative;
      top: 80%;

      button {
        width: 40%;
      }
    }
  }
</style>
