import React, { useEffect, useState } from 'react';
import PreviewArticleCard from './PreviewArticleCard';
import { fetchArticles, fetchArticlesByTopic } from '../apis';
import { useSearchParams } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import ErrorPage from './ErrorPage';
import { RotatingLines } from "react-loader-spinner";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState('desc')
  const [sortBy, setSortBy] = useState('created_at')
  const [error, setError] = useState(null);

  const topicQuery = searchParams.get("topic");

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topicQuery, sortBy, order)
    .then(({articles}) => {
      setArticles(articles);
      setIsLoading(false);
      setError(null);
    })
    .catch((err) => {
      setError(err)
    })
  }, [topicQuery, sortBy, order])



  if (error) {
    return <>
      <ErrorPage />
    </>
  }

  if (isLoading) {
    return (
      <>
        <h1>Loading articles...</h1>
        <p>This may take a little while if you've just opened the website!</p>
        <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        />
      </>
    )
  }
  else {
    return (
      <main>
        <h2>Articles</h2>

        <label htmlFor="sort-by">Sort By:</label>
        &emsp;
        <select name="sort-by" id="sort-by" value={sortBy} onChange={(event) => {setSortBy(event.target.value)}}>
          <option value="date">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        &emsp;
        <select name="order" id="order" value={order} onChange={(event) => {setOrder(event.target.value)}}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <div id="articles-list">
          {articles.map((article) => {
            return <PreviewArticleCard article = {article} key={article.article_id}/>
          })}
        </div>
      </main>
    );
};
}

export default ArticlesList;