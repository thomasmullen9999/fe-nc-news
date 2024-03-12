import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../apis';


const SingleArticle = ({article}) => {
  const [currentArticle, setCurrentArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  
  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(id)
    .then(({article}) => {
      setCurrentArticle(article);
      setIsLoading(false);
    })
  }, [id])
  
  const { article_id, topic, title, author, created_at, votes, article_img_url, comment_count, body } = currentArticle;

  if (isLoading) {
    return (
      <>
        <p>Loading article...</p>
      </>
    )
  }
  else {
    return (
      <div className= "single-article">
        <h4>{title}</h4>
        <p>Topic: {topic}</p>
        <p>Author: {author}</p>
        <img src={article_img_url} width="500"></img>
        <p>{body}</p>
        <p>Votes: {votes}</p>
        <button value={article_id}>
          Add vote
        </button>
        <p>Created at: {created_at}</p>
        <p>Comments: {comment_count}</p>
        <button value={article_id}>
          View all comments
        </button>
      </div>
    );
  }
};


export default SingleArticle;