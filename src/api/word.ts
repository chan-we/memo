import axios from 'axios'

export const getWordsByLesson = (lessonId: string) =>
  axios.get('/word/getWordsByLesson', {
    params: {
      lessonId,
    },
  })
