import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Header = () => {
  const { loggedInUser } = useContext(UserContext)
  return (
    <div>
      <h1>Welcome to NC News!</h1>
      <p>Hi, {loggedInUser.username}</p>
    </div>
  );
};

export default Header;