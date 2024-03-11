import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { fetchArticles } from '../apis';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles()
    .then(({articles}) => {
      setArticles(articles);
    })
  }, [])

  return (
    <div id="articles-list">
      <ul>
        {articles.map((article) => {
          return <ArticleCard article = {article} key={article.article_id}/>
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;