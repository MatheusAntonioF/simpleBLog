import React, { useState, useEffect } from 'react';

import { MdDelete } from 'react-icons/md';

import 'react-notifications-component/dist/theme.css';

import api from '../../services/api';

import Navbar from '../../components/Navbar';
import { Container } from './styles';

export default function DeleteUser() {
  const [users, setUsers] = useState([]);

  const { token } = JSON.parse(localStorage.getItem('token_user'));

  useEffect(() => {
    async function fetchedUsers() {
      const { data: allUsers } = await api.get('/users');
      setUsers(allUsers.data);
    }

    fetchedUsers();
  }, [users]);

  async function handleDeleteUser(user) {
    await api.delete(`/users/${user}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setUsers();
  }

  return users ? (
    <>
      <Navbar />
      <Container>
        {users.map(user => (
          <fieldset key={user.id}>
            <div>
              <div>
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <MdDelete size={28} onClick={() => handleDeleteUser(user.id)} />
              </div>
            </div>
          </fieldset>
        ))}
      </Container>
    </>
  ) : (
    ''
  );
}
