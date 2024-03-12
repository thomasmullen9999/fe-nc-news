import React, { useEffect, useState } from 'react';
import PreviewArticleCard from './PreviewArticleCard';
import { fetchArticles } from '../apis';
import { useParams } from 'react-router-dom';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles()
    .then(({articles}) => {
      setArticles(articles);
      setIsLoading(false);
    })
  }, [])

  if (isLoading) {
    return (
      <>
      <h1>Loading articles...</h1>
      </>
    )
  }
  else {
    return (
      <div id="articles-list">
        <ul>
          {articles.map((article) => {
            return <PreviewArticleCard article = {article} key={article.article_id}/>
          })}
        </ul>
      </div>
    );
};
}

export default ArticlesList;