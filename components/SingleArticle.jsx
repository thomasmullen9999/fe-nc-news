import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { changeVotesByArticleId, fetchArticleById, fetchCommentsByArticleId } from '../apis';
import CommentsList from './CommentsList';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import ErrorComponent from './ErrorComponent';


const SingleArticle = ({article}) => {
  const [currentArticle, setCurrentArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { loggedInUser } = useContext(UserContext)
  const [error, setError] = useState(null)
  
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
    changeVotesByArticleId(id)
    .then(({article}) => {
      setCurrentArticle(article);
      setError(null)
    })
    .catch((err) => {
      setError({ err });
    });
  }

  const { article_id, topic, title, author, created_at, votes, article_img_url, body } = currentArticle;

  let errorMessage = ''

  if (error) {
    errorMessage = error.err.message;
  }

  if (isLoading) {
    return (
      <>
        <p>Loading article...</p>
      </>
    )
  }
  else {
    return (
    <>
      <article className= "single-article">
        <h2>{title}</h2>
        <p>Topic: {topic}</p><p>Published by: {author}</p>
        <img src={article_img_url} width="85%" alt="A background related to the article's topic"></img>
        <p>{body}</p>
        <p>
          Votes: {votes}&emsp;<button value={article_id} onClick={handleVoteClick}>
            Add vote
          </button>
        </p>
        <ErrorComponent message={errorMessage}/>
        <p>Created at: {created_at}</p>
        <CommentsList id = {id} />
      </article>
    </>
    );
  }
};


export default SingleArticle;