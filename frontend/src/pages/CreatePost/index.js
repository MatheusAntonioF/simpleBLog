/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import Navbar from '../../components/Navbar';
import { Container, Form } from './styles';

export default function CreatePost({ history }) {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { title: postTitle, body: postBody };

    await api.post('/posts', data);

    history.push('/home');
  }

  return (
    <>
      <Navbar />
      <Container>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>NOVO POST</legend>
            <label htmlFor="inputTitle">Título do post</label>
            <input
              type="text"
              placeholder="Aqui vai o título"
              id="inputTitle"
              value={postTitle}
              onChange={e => setPostTitle(e.target.value)}
            />
            <label htmlFor="textBodyPost">Escreva sua postagem</label>
            <textarea
              name="bodyPost"
              id="textBodyPost"
              cols="90"
              rows="10"
              value={postBody}
              onChange={e => setPostBody(e.target.value)}
            />

            <button type="submit">Submeter</button>
          </fieldset>
        </Form>
      </Container>
    </>
  );
}

CreatePost.propTypes = {
  history: PropTypes.shape().isRequired,
};
