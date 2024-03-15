import React, { useState } from 'react';
import { deleteCommentById } from '../apis';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import ErrorComponent from './ErrorComponent';

const CommentCard = ({comment, comments, setComments}) => {
  const { body, votes, author, created_at, comment_id } = comment;
  const { loggedInUser } = useContext(UserContext)
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null)

  function handleCommentDeletion() {
    if (loggedInUser.username === author) {
      setIsDeleting(true);
      deleteCommentById(comment_id)
      .then(({response}) => {
        setIsDeleting(false)
        const newComments = comments.filter((comment) => {
          return comment.comment_id !== comment_id;
        })
        setComments(newComments)
        setError(null);
      })
      .catch((err) => {
        setError({ err });
      });
    }
    else {
      loginMessage = 'You are not logged in as this user.'
    }
  }

  let errorMessage = ''
  let loginMessage = ''

  if (error) {
    errorMessage = error.err.message;
  }

  if (isDeleting) {
    return <p>Deleting comment...</p>
  }

  else return (
    <div className="comment-card">
      <p>Author: {author}</p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <p>Created at {created_at}</p>
      <button onClick={handleCommentDeletion}>Delete comment</button>
      <ErrorComponent message={errorMessage}/>
      <p>{loginMessage}</p>
    </div>
  );
};

export default CommentCard;