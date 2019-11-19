/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../services/api';

import Navbar from '../../components/Navbar';
import FeaturesAdmin from './FeaturesAdmin';

export default function Main() {
  const [posts, setPosts] = useState({});
  const [userRoles, setUserRoles] = useState([]);

  const { token, user } = JSON.parse(localStorage.getItem('token_user'));

  useEffect(() => {
    async function fetchedPosts() {
      const { data: allPosts } = await api.get('/posts', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(allPosts);
    }
    fetchedPosts();
  }, [token]);

  useEffect(() => {
    async function rolesAndPermissions() {
      const { data: roles } = await api.get(`/users/${user.id}/permissions`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUserRoles(roles);
    }
    rolesAndPermissions();
  }, [token, user.id]);

  return userRoles ? (
    <>
      <Navbar />
      <FeaturesAdmin checkRoles={userRoles.permissions} />
    </>
  ) : (
    <Redirect to="/" />
  );
}

// posts.hasOwnProperty('data')
