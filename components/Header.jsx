import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Header = () => {
  const { loggedInUser } = useContext(UserContext)
  return (
    <header>
      <h1>Welcome to NC News!</h1>
      <h2>Hi, <strong>{loggedInUser.username}</strong>&emsp;<img src={loggedInUser.avatar_url} alt="A Mr. Men character representing your username." width='50px'></img></h2>
      
    </header>
  );
};

export default Header;