import axios from "axios"

const api = axios.create({
  baseURL: "https://be-nc-news-example-46vu.onrender.com/api",
  timeout: 5000,
})

export default api
