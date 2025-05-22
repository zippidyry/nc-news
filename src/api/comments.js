import api from "./axios"

export const getCommentsByArticleId = (articleId) =>
  api.get(`/articles/${articleId}/comments`)

export const postComment = (articleId, comment) =>
  api.post(`/articles/${articleId}/comments`, comment)

export const deleteComment = (commentId) =>
  api.delete(`/comments/${commentId}`)
