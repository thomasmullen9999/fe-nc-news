import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { changeVotesByArticleId, fetchArticleById, fetchCommentsByArticleId } from '../apis';
import CommentCard from './CommentCard';
import CommentsList from './CommentsList';


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

  function handleVoteClick() {
    // non-optimistic rendering approach
    changeVotesByArticleId(id).then(({article}) => {
      setCurrentArticle(article);
    });
  }

  const { article_id, topic, title, author, created_at, votes, article_img_url, body } = currentArticle;

  if (isLoading) {
    return (
      <>
        <p>Loading article...</p>
      </>
    )
  }
  else {
    return (
      <article className= "single-article">
        <h2>{title}</h2>
        <p>Topic: {topic}</p>
        <p>Author: {author}</p>
        <img src={article_img_url} width="900"></img>
        <p>{body}</p>
        <p>Votes: {votes}</p>
        <button value={article_id} onClick={handleVoteClick}>
          Add vote
        </button>
        <p>Created at: {created_at}</p>
        <CommentsList id = {id} />
      </article>
      
    );
  }
};


export default SingleArticle;