<template>
  <div class="test-page" v-if="list?.length">
    <div v-if="index < list.length" class="test-page-content">
      <h2>{{ list[index].cn }}</h2>
      <span class="attr">{{
        list[index].attr ? `[${list[index].attr}]` : ''
      }}</span>
      <p class="answer" :class="{ hidden: !showAnswer }">
        {{ list[index].jp }}
      </p>
      <div v-if="!showAnswer" class="test-page-action">
        <el-button type="danger" plain @click="handleClick(false)"
          >不知道</el-button
        >
        <el-button type="success" plain @click="handleClick(true)"
          >知道</el-button
        >
      </div>
      <div v-else class="test-page-action">
        <el-button v-if="index" plain @click="goPrev">上一个</el-button>
        <el-button
          v-if="grasped"
          type="danger"
          plain
          @click="handleClick(false)"
          >设为不知道</el-button
        >
        <el-button plain @click="goNext">下一个</el-button>
      </div>
      <span class="count">{{ index + 1 }} / {{ list.length }}</span>
    </div>
    <div v-else class="test-page-result">
      <el-result icon="success" title="已完成">
        <template #extra>
          <el-button type="primary" @click="goBack">返回列表</el-button>
        </template>
      </el-result>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, unref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import { debounce } from 'lodash-es'
  import { getWordList } from '@/utils/word-list'
  import { IWordItem } from '@/types/word'

  const route = useRoute()
  const router = useRouter()

  const list = ref<IWordItem[]>([])

  const index = ref(0)
  const showAnswer = ref(false)
  const grasped = ref(false)

  const goPrev = debounce(() => {
    index.value--
    showAnswer.value = false
    grasped.value = false
  }, 200)

  const goNext = debounce(() => {
    index.value++
    showAnswer.value = false
    grasped.value = false
  }, 200)

  const handleClick = (thisGrasped: boolean) => {
    showAnswer.value = true
    grasped.value = thisGrasped

    if (!thisGrasped) {
      list.value.push(unref(list)[unref(index)])
    }
  }

  const goBack = () => {
    router.push({ name: 'ClassPage' })
  }

  const init = () => {
    getWordList(route.params.id as string).then((data) => {
      console.log(data)
      list.value = data
    })
  }

  init()
</script>

<style scoped lang="less">
  .test-page {
    height: 100%;
    width: 100%;

    &-content {
      position: relative;
      top: 50%;
      transform: translate(0, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      .attr {
        height: 24px;
      }
      .answer {
        &.hidden {
          //   visibility: hidden;
          color: black;
          background-color: black;
        }
      }
    }
    &-action {
      display: flex;
      gap: 16px;
    }

    &-result {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    .count {
      position: absolute;
      right: 30px;
      top: 30px;
    }
  }
</style>
