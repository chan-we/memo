<template>
  <div class="test-page" v-if="wordList?.length">
    <div class="test-page-content">
      <h2>{{ wordList[index].cn }}</h2>
      <span class="attr">{{
        wordList[index].attr ? `[${wordList[index].attr}]` : ''
      }}</span>
      <p class="answer" :class="{ hidden: !showAnswer }">
        {{ wordList[index].jp }}
      </p>
      <div class="test-page-action">
        <el-button :disabled="index === 0" @click="goPrev">上一个</el-button>
        <el-button @click="showAnswer = !showAnswer">{{
          showAnswer ? '隐藏答案' : '查看答案'
        }}</el-button>
        <el-button :disabled="index === wordList.length - 1" @click="goNext"
          >下一个</el-button
        >
      </div>
    </div>

    <span class="count">{{ index + 1 }} / {{ wordList.length }}</span>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { debounce } from 'lodash-es'
  import useWordList from './hooks/useWordList'

  const { wordList } = useWordList()

  const index = ref(0)
  const showAnswer = ref(false)

  const goPrev = debounce(() => {
    index.value--
    showAnswer.value = false
  }, 200)

  const goNext = debounce(() => {
    index.value++
    showAnswer.value = false
  }, 200)
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
    }

    .count {
      position: absolute;
      right: 30px;
      top: 30px;
    }
  }
</style>
