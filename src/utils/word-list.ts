import { IWordItem } from '@/types/word'

export const getWordList = (id: string | number): Promise<IWordItem[]> => {
  const modules = import.meta.glob('@/config/lesson*.ts')

  const fn = modules[`/src/config/lesson${id}.ts`]

  return new Promise((resolve, reject) => {
    if (!fn) {
      reject()
    }

    fn()
      .then((data: any) => {
        resolve(data.default as IWordItem[])
      })
      .catch(() => {
        reject()
      })
  })
}
