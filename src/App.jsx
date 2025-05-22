import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ArticlePage from "./pages/ArticlePage"
import TopicPage from "./pages/TopicPage"
import NotFound from "./pages/NotFound"
import { UserProvider } from "./contexts/UserContext"

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/topics/:topic" element={<TopicPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  )
}

export default App

