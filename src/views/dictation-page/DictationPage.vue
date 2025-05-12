<template>
  <div class="dictation-page">
    <div class="dictation-page-content">
      <el-form :form="form">
        <el-form-item label="顺序">
          <el-radio-group v-model="form.order">
            <el-radio border value="ordered">正序</el-radio>
            <el-radio border value="random">乱序</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="间隔">
          <span>{{ form.delay }}s</span>
          <el-slider
            v-model="form.delay"
            :min="1"
            :max="5"
            placement="left"
            :format-tooltip="(v:number) => `${v}s`"
          />
        </el-form-item>
        <el-form-item label="重复">
          <span>{{ form.repeat }}次</span>
          <el-slider
            v-model="form.repeat"
            :min="1"
            :max="5"
            placement="left"
            :format-tooltip="(v:number) => `${v}次`"
          />
        </el-form-item>
      </el-form>

      <el-button type="primary">开始</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const form = reactive({
    order: 'ordered',
    delay: 1,
    repeat: 1,
  })
</script>

<style scoped lang="less">
  .dictation-page {
    padding: 16px 32px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      //   align-items: center;
    }
  }
</style>
