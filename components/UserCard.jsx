import React from 'react';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';


const UserCard = ({user}) => {
  const { setLoggedInUser } = useContext(UserContext)

  const { username, name, avatar_url } = user;

  return (
    <div className= "user-card">
      <h2>{username}</h2>
      <h2>{name}</h2>
      <img src={avatar_url} width="200px"></img>
      <button onClick={() => 
        {setLoggedInUser(user)}}>Log in</button>
    </div>
  );
};

export default UserCard;