import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById, fetchCommentsByArticleId } from '../apis';
import CommentCard from './CommentCard';


const SingleArticle = ({article}) => {
  const [currentArticle, setCurrentArticle] = useState([]);
  const [comments, setComments] = useState([]);
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

  useEffect(() => {
    fetchCommentsByArticleId(id)
    .then(({comments}) => {
      setComments(comments);
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
        <div id="comments-section">
          <h2>Comments ({comment_count})</h2>
          <ul>
            {comments.map((comment) => {
              return <CommentCard comment = {comment} key = {comment.comment_id}/>
            })}
          </ul>
        </div>
      </div>
      
    );
  }
};


export default SingleArticle;