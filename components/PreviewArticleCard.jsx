import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const PreviewArticleCard = ({article}) => {

  const { article_id, topic, title, author, created_at, votes, article_img_url, comment_count } = article;
  const fullArticleLink = `/articles/${article_id}`

  return (
    <div className= "preview-article-card">
      <h3>{title}</h3>
      <p>Topic: {topic}</p>
      <img src={article_img_url} width="80%" alt="A background related to the article's topic"></img>
      <p>Published by {author} at {created_at}</p>
      <p><strong>Votes {votes}</strong>&emsp;&emsp;&emsp;<strong>Comments: {comment_count}</strong></p>
      <Link to={fullArticleLink}><Button>View Full Article</Button></Link> 
    </div>
  );
};

export default PreviewArticleCard;