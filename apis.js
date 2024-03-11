import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-evv6.onrender.com/api/",
});

 export const fetchArticles = (categoryName) => {
  return newsApi.get("/articles").then((response) => {
    return response.data;
  })
};