import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreviewArticleCard = ({article}) => {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    navigate(`/articles/${event.target.value}`);
  }

  const { article_id, topic, title, author, created_at, votes, article_img_url, comment_count } = article;

  return (
    <div className= "preview-article-card">
      <h4>{title}</h4>
      <p>Topic: {topic}</p>
      <p>Author: {author}</p>
      <img src={article_img_url} width="500"></img>
      <p>Votes: {votes}</p>
      <button value={article_id}>
        Add vote
      </button>
      <p>Created at: {created_at}</p>
      <p>Comments: {comment_count}</p>
      <button value={article_id} onClick={handleSubmit}>
        View full article
      </button>
    </div>
  );
};

export default PreviewArticleCard;