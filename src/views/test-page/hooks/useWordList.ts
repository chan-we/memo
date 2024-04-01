import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { IWordItem } from '@/types/alphabeta'

export default function useWordList() {
  const route = useRoute()

  const wordList = ref<IWordItem[]>()

  watch(
    () => route.params,
    async () => {
      const modules = import.meta.glob('@/config/lesson*.ts')

      const fn = modules[`/src/config/lesson${route.params.id}.ts`]

      if (!fn) {
        ElMessage.error('找不到列表')
        return
      }
      fn()
        .then((data: any) => {
          wordList.value = data.default as IWordItem[]
        })
        .catch(() => {
          ElMessage.error('找不到列表')
        })
    },
    { deep: true, immediate: true }
  )

  return { wordList }
}
