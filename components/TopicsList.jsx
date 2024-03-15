import React, { useEffect, useState } from 'react';
import TopicCard from './TopicCard';
import { fetchTopics } from '../apis';
import { useParams } from 'react-router-dom';

const TopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchTopics()
    .then(({topics}) => {
      setTopics(topics);
      setIsLoading(false);
    })
  }, [])

  if (isLoading) {
    return (
      <>
      <h1>Loading topics…</h1>
      </>
    )
  }
  else {
    return (
      <section id="topics-list">
        <h2>Topics</h2>
        <ul>
          {topics.map((topic) => {
            return <TopicCard topic = {topic} key={topic.slug}/>
          })}
        </ul>
      </section>
    );
};
}

export default TopicsList;