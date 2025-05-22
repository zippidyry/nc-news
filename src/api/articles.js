import api from "./axios"

export const getArticles = (sortBy = "created_at", topic = null) => {
  let url = `/articles?sort_by=${sortBy}&order=desc`
  if (topic) url += `&topic=${topic}`
  return api.get(url)
}

export const getArticleById = (id) => api.get(`/articles/${id}`)

export const voteArticle = (id, inc) =>
  api.patch(`/articles/${id}`, { inc_votes: inc })
