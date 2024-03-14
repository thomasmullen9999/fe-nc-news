import React, { useState } from 'react';
import { deleteCommentById } from '../apis';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const CommentCard = ({comment, comments, setComments}) => {
  const { body, votes, author, created_at, comment_id } = comment;
  const { loggedInUser } = useContext(UserContext)
  const [isDeleting, setIsDeleting] = useState(false);

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
      })
    }
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
    </div>
  );
};

export default CommentCard;