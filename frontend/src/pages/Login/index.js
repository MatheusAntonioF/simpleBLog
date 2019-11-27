/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Form } from './styles';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    const dataLogin = { email, password };

    const response = await api.post('/sessions', dataLogin);

    api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

    if (response.status === 200) {
      localStorage.setItem('token_user', JSON.stringify(response.data));
    }

    history.push('/home');
  }

  return localStorage.getItem('token_user') ? (
    <Redirect to="/home" />
  ) : (
    <>
      <Container>
        <h1>Sign In</h1>
        <hr />
        <Form onSubmit={handleSubmit}>
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            id="inputEmail"
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            id="inputPassword"
            onChange={e => setPassword(e.target.value)}
          />
          <small>
            <Link to="/">Esqueceu sua senha?</Link>
          </small>

          <button type="submit">Entrar</button>
        </Form>
      </Container>
      <Container>
        <Link to="/">Criar uma conta</Link>
      </Container>
    </>
  );
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
};
