import { useEffect, useState } from "react"
import { getArticles } from "../api/articles"
import ArticleCard from "../components/ArticleCard"

export default function HomePage() {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getArticles()
      .then(res => setArticles(res.data.articles))
      .catch(() => setError("Failed to load articles."))
  }, [])

  if (error) return <p>{error}</p>

  return (
    <div>
      <h1>Articles</h1>
      {articles.map(article => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  )
}

