import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getArticles } from "../api/articles"
import ArticleCard from "../components/ArticleCard"

export default function TopicPage() {
  const { topic } = useParams()
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles("created_at", topic).then(res => setArticles(res.data.articles))
  }, [topic])

  return (
    <div>
      <h1>Articles on {topic}</h1>
      {articles.map(article => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  )
}
