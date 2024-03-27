import React from 'react';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';


const UserCard = ({user}) => {
  const { setLoggedInUser } = useContext(UserContext)
  const { username, name, avatar_url } = user;
  const imageText = `A Mr. Men cartoon character, representing ${username}`;

  return (
    <div className= "user-card">
      <h3>{username}</h3>
      <p><strong>{name}</strong></p>
      <img src={avatar_url} alt={imageText}></img>
      <button onClick={() => 
        {setLoggedInUser(user)}}>Log in</button>
    </div>
  );
};

export default UserCard;