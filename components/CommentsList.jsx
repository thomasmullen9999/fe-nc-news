import React, { useEffect, useState } from 'react';
import { fetchCommentsByArticleId } from '../apis';
import CommentCard from './CommentCard';

const CommentsList = (props) => {
  const {id} = props;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticleId(id)
    .then(({comments}) => {
      setComments(comments);
    })
  }, [id])

  return (
    <div id="comments-list"> 
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => {
          return <CommentCard comment = {comment} key = {comment.comment_id}/>
        })}
      </ul>
    </div>
  );
};

export default CommentsList;