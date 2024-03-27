import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../apis';
import UserCard from './UserCard';

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
      </>
    )
  }
  else {
    return (
      <>
        <h2>Users</h2>
        <section id="users-list">
          <br></br>
            {users.map((user) => {
              return <UserCard user = {user} key={user.username}/>
            })}
        </section>
      </>
      
    );
};
}

export default UsersList;