import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopicCard = ({topic}) => {

  const { slug, description } = topic;
  const topicsLink = `/articles/?topic=${slug}`

  return (
    <div className= "topic-card">
   	<h3>{slug}</h3>
    <p>{description}</p>
    <Link to={topicsLink}><Button>View related articles</Button></Link>
    </div>
  );
};

export default TopicCard;