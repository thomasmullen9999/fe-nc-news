import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const PreviewArticleCard = ({article}) => {

  const { article_id, topic, title, author, created_at, votes, article_img_url, comment_count } = article;
  const fullArticleLink = `/articles/${article_id}`

  return (
    <div className= "preview-article-card">
      <h4>{title}</h4>
      <p>Topic: {topic}</p>
      <p>Author: {author}</p>
      <img src={article_img_url} width="500"></img>
      <p>Votes: {votes}</p>
      <p>Created at: {created_at}</p>
      <p>Comments: {comment_count}</p>
      <Link to={fullArticleLink}><Button>View Full Article</Button></Link> 
    </div>
  );
};

export default PreviewArticleCard;