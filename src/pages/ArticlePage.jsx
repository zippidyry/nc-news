import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { getArticleById, voteArticle } from "../api/articles"
import { getCommentsByArticleId, postComment } from "../api/comments"
import { UserContext } from "../contexts/UserContext"
import Comment from "../components/Comment"

export default function ArticlePage() {
  const { article_id } = useParams()
  const { user } = useContext(UserContext)

  const [article, setArticle] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")

  useEffect(() => {
    getArticleById(article_id).then(res => setArticle(res.data.article))
    getCommentsByArticleId(article_id).then(res => setComments(res.data.comments))
  }, [article_id])

  const handleVote = () => {
    voteArticle(article_id, 1).then(res => setArticle(res.data.article))
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    const comment = { username: user.username, body: newComment }
    postComment(article_id, comment).then(res => {
      setComments(prev => [res.data.comment, ...prev])
      setNewComment("")
    })
  }

  if (!article) return <p>Loading...</p>

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
      <button onClick={handleVote}>Vote</button>

      <h3>Comments</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          required
        ></textarea>
        <button type="submit">Post Comment</button>
      </form>

      {comments.map(comment => (
        <Comment key={comment.comment_id} comment={comment} />
      ))}
    </div>
  )
}
