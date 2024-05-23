import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../apis';
import UserCard from './UserCard';
import { RotatingLines } from 'react-loader-spinner';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers()
    .then(({users}) => {
      setUsers(users);
      setIsLoading(false);
    })
  }, [])

  if (isLoading) {
    return (
      <>
      <h1>Loading users...</h1>
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
      <>
        <h2>Users</h2>
        <section id="users-list">
            {users.map((user) => {
              return <li><UserCard user = {user} key={user.username}/></li>
            })}
        </section>
      </>
      
    );
};
}

export default UsersList;