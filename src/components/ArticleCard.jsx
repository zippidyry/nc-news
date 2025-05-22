import { Link } from "react-router-dom"

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>By {article.author}</p>
      <p>Votes: {article.votes}</p>
    </div>
  )
}
