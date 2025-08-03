import React, { useState } from "react";
import { deleteCommentById } from "../apis";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import ErrorComponent from "./ErrorComponent";

const CommentCard = ({ comment, comments, setComments }) => {
  const { body, votes, author, created_at, comment_id } = comment;
  const { loggedInUser } = useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  function handleCommentDeletion() {
    if (loggedInUser.username === author) {
      setIsDeleting(true);
      deleteCommentById(comment_id)
        .then(({ response }) => {
          setIsDeleting(false);
          const newComments = comments.filter((comment) => {
            return comment.comment_id !== comment_id;
          });
          setComments(newComments);
          setError(null);
        })
        .catch((err) => {
          setError({ err });
        });
    } else {
      loginMessage = "You are not logged in as this user.";
    }
  }

  let errorMessage = "";
  let loginMessage = "";

  const date = new Date(created_at);

  // Format the date into the desired readable format
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = date.toLocaleString("en-US", options);

  // Construct the output string in the desired format
  const readableDate = formattedDate.replace(",", "");

  if (error) {
    errorMessage = error.err.message;
  }

  if (isDeleting) {
    return <p>Deleting comment...</p>;
  } else
    return (
      <div className="comment-card">
        <p>{body}</p>
        &#128077; {votes}&emsp;
        <p>Author: {author}</p>
        <p>Published on {readableDate}</p>
        {/* Conditionally render the delete button */}
        {loggedInUser.username === author && (
          <button onClick={handleCommentDeletion}>Delete comment</button>
        )}
        <ErrorComponent message={errorMessage} />
        <p>{loginMessage}</p>
      </div>
    );
};

export default CommentCard;
