import React from 'react';

const CommentCard = ({comment}) => {
  const { body, votes, author, created_at } = comment;

  return (
    <div className="comment-card">
      <p>Author: {author}</p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <p>Created at {created_at}</p>
    </div>
  );
};

export default CommentCard;