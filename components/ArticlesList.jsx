import React, { useEffect, useState } from 'react';
import PreviewArticleCard from './PreviewArticleCard';
import { fetchArticles, fetchArticlesByTopic } from '../apis';
import { useSearchParams } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState('desc')
  const [sortBy, setSortBy] = useState('created_at')

  const topicQuery = searchParams.get("topic");

/*   useEffect(() => {
    fetchArticlesByTopic(topicQuery).then(({articles}) => {
      setArticles(articles);
    });
  }, [topicQuery]); */


  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topicQuery, sortBy, order)
    .then(({articles}) => {
      setArticles(articles);
      setIsLoading(false);
    })
  }, [topicQuery, sortBy, order])

  if (isLoading) {
    return (
      <>
      <h1>Loading articles...</h1>
      </>
    )
  }
  else {
    return (
      <main id="articles-list">
        <h2>Articles</h2>

        <label htmlFor="sort-by">Sort by:</label>
        &emsp;
        <select name="sort-by" id="sort-by" value={sortBy} onChange={(event) => {setSortBy(event.target.value)}}>
          <option value="date">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        &emsp;
        <label htmlFor="order">Order:</label>
        &emsp;
        <select name="order" id="order" value={order} onChange={(event) => {setOrder(event.target.value)}}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <ul>
          {articles.map((article) => {
            return <PreviewArticleCard article = {article} key={article.article_id}/>
          })}
        </ul>
      </main>
    );
};
}

export default ArticlesList;