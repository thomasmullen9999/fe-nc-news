import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  changeVotesByArticleId,
  fetchArticleById,
  fetchCommentsByArticleId,
} from "../apis";
import CommentsList from "./CommentsList";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import ErrorComponent from "./ErrorComponent";
import ErrorPage from "./ErrorPage";

const SingleArticle = ({ article }) => {
  const [currentArticle, setCurrentArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { loggedInUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(id)
      .then(({ article }) => {
        setCurrentArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError({ err });
      });
  }, [id]);

  function handleVoteClick() {
    // non-optimistic rendering approach
    changeVotesByArticleId(id)
      .then(({ article }) => {
        setCurrentArticle(article);
        setError(null);
      })
      .catch((err) => {
        setError({ err });
      });
  }

  const { article_id, topic, title, author, votes, article_img_url, body } =
    currentArticle;
  let { created_at } = currentArticle;

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

  let errorMessage = "";

  if (error) {
    errorMessage = error.err.message;
  }

  if (isLoading) {
    return (
      <>
        <p>Loading article...</p>
      </>
    );
  } else {
    if (!error) {
      return (
        <>
          <article className="single-article">
            <h2>{title}</h2>
            <p>Topic: {topic}</p>
            <p>Published by: {author}</p>
            <img
              src={article_img_url}
              width="85%"
              alt="A background related to the article's topic"
              className="rounded-corners"
            ></img>
            <p>{body}</p>
            <p>
              <button value={article_id} onClick={handleVoteClick}>
                Upvote
              </button>
              &#128077; {votes}&emsp;
            </p>
            <ErrorComponent message={errorMessage} />
            <p>Published on {readableDate}</p>
            <br></br>
            <CommentsList id={id} />
          </article>
        </>
      );
    }
    // if the article is not found (i.e. invalid article ID number) return the error page instead
    else
      return (
        <>
          <ErrorPage />
        </>
      );
  }
};

export default SingleArticle;
