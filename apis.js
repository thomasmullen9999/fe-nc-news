import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-evv6.onrender.com/api/",
});

export const fetchArticles = () => {
  return newsApi.get("/articles").then((response) => {
    return response.data;
  })
};

export const fetchArticleById = (id) => {
  return newsApi.get(`/articles/${id}`).then((response) => {
    return response.data;
  })
}