import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-evv6.onrender.com/api",
});

export const fetchArticles = () => {
  return newsApi.get("/articles").then((response) => {
    return response.data;
  })
};

export const fetchUsers = () => {
  return newsApi.get("/users").then((response) => {
    return response.data;
  })
};

export const fetchArticleById = (id) => {
  return newsApi.get(`/articles/${id}`).then((response) => {
    return response.data;
  })
}

export const fetchCommentsByArticleId = (id) => {
  return newsApi.get(`/articles/${id}/comments`).then((response) => {
    return response.data;
  })
}

export const changeVotesByArticleId = (id) => {
  return newsApi.patch(`/articles/${id}`, {
    inc_votes: 1
  }).then((response) => {
    return response.data;
  })
}

export const addNewCommentByArticleId = (id, newComment) => {
  return newsApi.post(`/articles/${id}/comments`, newComment)
  .then((response) => {
    return response.data;
  })
}

export const deleteCommentById = (id) => {
  return newsApi.delete(`/comments/${id}`)
  .then((response) => {
    return response.data;
  })
}