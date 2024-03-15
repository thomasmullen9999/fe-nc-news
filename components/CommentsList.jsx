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

    
    const newComment = {
      username: 'weegembump',
      body: body
    }
    
    addNewCommentByArticleId(id, newComment)
    .then(({comment}) => {
      const postedComment = comment;
      const newComments = [postedComment, ...comments]
      setComments(newComments);
      setError(null)
      document.getElementById('post-comment-button').disabled = false;
      document.getElementById('comment-post-box').value = '';
    })
    .catch((err) => {
      setError({ err });
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
        <label htmlFor='body'>Post a comment!</label>
        <input
          id='comment-post-box'
          type="text"
          name="body"
          placeholder="Comment..."
          value={body}
          onChange={handleBodyChange}
        />
        <button id="post-comment-button" type="submit">Post</button>
      </form>
      <br></br>
      <ul>
        {comments.map((comment) => {
          return <CommentCard comments = {comments} setComments = {setComments} comment = {comment} key = {comment.comment_id}/>
        })}
      </ul>
    </section>
  );
};

export default CommentsList;