import { deleteComment } from "../api/comments"

export default function Comment({ comment }) {
  const handleDelete = () => {
    deleteComment(comment.comment_id).then(() => {
      alert("Comment deleted. Refresh to update.")
    })
  }

  return (
    <div className="comment">
      <p><strong>{comment.author}</strong>: {comment.body}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
