import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Container, Fieldset } from './styles';

export default function ListPosts({ posts }) {
  const { data: allPosts } = posts;

  return allPosts ? (
    <Container>
      {allPosts.map(post => (
        <Fieldset key={post.id}>
          <div>
            <legend>{post.title}</legend>
            <p>{post.author.name}</p>
            <span>
              <Moment>{post.updated_At}</Moment>
            </span>
          </div>
          <p>{post.body}</p>
        </Fieldset>
      ))}
    </Container>
  ) : (
    ''
  );
}

ListPosts.propTypes = {
  posts: PropTypes.shape().isRequired,
};
