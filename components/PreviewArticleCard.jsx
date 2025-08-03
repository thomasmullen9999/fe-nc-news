import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const PreviewArticleCard = ({ article }) => {
  const {
    article_id,
    topic,
    title,
    author,
    created_at,
    votes,
    article_img_url,
    comment_count,
  } = article;
  const fullArticleLink = `/articles/${article_id}`;

  // Convert ISO string to Date object
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

  return (
    <div className="preview-article-card">
      <h3>{title}</h3>
      <p>Topic: {topic}</p>
      <img
        src={article_img_url}
        width="80%"
        alt="A background related to the article's topic"
        className="rounded-corners"
      ></img>
      <p>
        Published by <strong>{author}</strong> on {readableDate}
      </p>
      <p>
        <strong>&#128077; {votes}</strong>&emsp;&emsp;&emsp;
        <strong>&#128172; {comment_count}</strong>
      </p>
      <Link to={fullArticleLink}>
        <Button>View Full Article</Button>
      </Link>
    </div>
  );
};

export default PreviewArticleCard;
