import React, { useEffect, useState } from 'react';
import TopicCard from './TopicCard';
import { fetchTopics } from '../apis';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

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