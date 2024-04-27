import React, { useEffect, useState } from 'react';
import { addNewCommentByArticleId, fetchCommentsByArticleId } from '../apis';
import CommentCard from './CommentCard';
import ErrorComponent from './ErrorComponent';

const CommentsList = (props) => {
  const {id} = props;
  const [comments, setComments] = useState([]);
  const [body, setBody] = useState('')
  const [error, setError] = useState(null)

  function handleCommentSubmit(event) {
    event.preventDefault();
    document.getElementById('post-comment-button').disabled = true;
    setBody('');

    
    const newComment = {
      username: 'weegembump',
      body: body
    }
    
    addNewCommentByArticleId(id, newComment)
    .then(({comment}) => {
      document.getElementById('post-comment-button').disabled = false;
      const postedComment = comment;
      const newComments = [postedComment, ...comments]
      setComments(newComments);
      setError(null)
    })
    .catch((err) => {
      setError({ err });
      document.getElementById('post-comment-button').disabled = false;
    });
  }

  function handleBodyChange(event) {
    setBody(event.target.value);
  }

  useEffect(() => {
    fetchCommentsByArticleId(id)
    .then(({comments}) => {
      setComments(comments);
    })
  }, [id])

  let errorMessage = ''

  if (error) {
    errorMessage = `${error.err.message}. Did you try to post an empty comment?`;
  }

  return (
    <section id="comments-list"> 
      <h2>Comments</h2>
      <ErrorComponent message={errorMessage}/>
      <form id="post-comment" onSubmit={handleCommentSubmit}>
        <input
          id='comment-post-box'
          type="text"
          name="body"
          placeholder="Add a new comment..."
          value={body}
          onChange={handleBodyChange}
        />
        <button id="post-comment-button" type="submit">Post</button>
      </form>
      
        {comments.map((comment) => {
          return <CommentCard comments = {comments} setComments = {setComments} comment = {comment} key = {comment.comment_id}/>
        })}
    </section>
  );
};

export default CommentsList;