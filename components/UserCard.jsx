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
      <h3>{name}</h3>
      <img src={avatar_url} width="30%" alt={imageText}></img>
      <button onClick={() => 
        {setLoggedInUser(user)}}>Log in</button>
    </div>
  );
};

export default UserCard;