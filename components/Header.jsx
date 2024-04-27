import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Header = () => {
  const { loggedInUser } = useContext(UserContext)
  return (
    <header>
      <h1>NC News</h1>
      <h2>Hi, <strong>{loggedInUser.name}</strong></h2>
      <img src={loggedInUser.avatar_url} alt="A Mr. Men character representing your username." width={50} height={50}></img>
      
    </header>
  );
};

export default Header;