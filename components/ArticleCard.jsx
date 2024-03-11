import React from 'react';

const ArticleCard = ({article}) => {
  const { article_id, topic, title, author, created_at, votes, article_img_url, comment_count } = article;
  return (
    <div className= "article-card">
      <h4>{title}</h4>
      <p>Topic: {topic}</p>
      <p>Author: {author}</p>
      <img src={article_img_url} width="500"></img>
      <p>Votes: {votes}</p>
      <p>Created at: {created_at}</p>
      <p>Comments: {comment_count}</p>
    </div>
  );
};

export default ArticleCard;