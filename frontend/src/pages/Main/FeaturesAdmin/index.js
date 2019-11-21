/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function FeaturesAdmin({ checkRoles }) {
  const [createPost, setCreatePost] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  useEffect(() => {
    function checkPermissions() {
      if (checkRoles) {
        if (checkRoles.includes('create-post')) {
          setCreatePost(true);
        }
        if (checkRoles.includes('delete-user')) {
          setDeleteUser(true);
        }
      }
    }
    checkPermissions();
  }, [checkRoles]);

  return (
    <Container>
      {createPost && <Link to="/home/create-new-post">Criar novo post</Link>}
      {deleteUser && <Link to="/home/delete-user">Excluir usuário</Link>}
    </Container>
  );
}

FeaturesAdmin.propTypes = {
  checkRoles: PropTypes.array,
};
