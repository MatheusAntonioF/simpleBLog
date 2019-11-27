/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { MdArrowUpward } from 'react-icons/md';
import api from '../../services/api';

import Navbar from '../../components/Navbar';
import { Container, CatchMessage } from './styles';

export default function ShowPost({ match }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchedPost() {
      const response = await api.get(`/posts/${match.params.slug}`);

      setPost(response.data);
    }

    fetchedPost();
  }, []);

  async function handleFollowUser(user) {
    await api.post(`/users/${user}/following`);
  }

  return post.author ? (
    <>
      <Navbar />
      <Container>
        <div>
          <h3>{post.title}</h3>
          <span>
            <p>Seguir author</p>
            <MdArrowUpward
              size={34}
              onClick={() => handleFollowUser(post.author.id)}
            />
          </span>
          <h4>{post.author.name}</h4>
          <small>
            <Moment>{post.update_At}</Moment>
          </small>
          <p>{post.body}</p>
        </div>
      </Container>
    </>
  ) : (
    <CatchMessage>
      <div>
        <h1>Erro inesperado ao carregar post!</h1>
      </div>
    </CatchMessage>
  );
}

ShowPost.propTypes = {
  match: PropTypes.shape().isRequired,
};
