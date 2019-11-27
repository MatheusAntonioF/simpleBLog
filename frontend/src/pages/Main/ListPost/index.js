import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Container, Fieldset } from './styles';

export default function ListPosts({ posts }) {
  const { data: allPosts } = posts;

  return allPosts ? (
    <Container>
      {allPosts.map(post => (
        <Link to={`/home/post/${post.slug}`} key={post.id}>
          <Fieldset>
            <div>
              <legend>{post.title}</legend>
              <p>{post.author.name}</p>
              <span>
                <Moment>{post.updated_At}</Moment>
              </span>
            </div>
            <p>{post.body}</p>
          </Fieldset>
        </Link>
      ))}
    </Container>
  ) : (
    ''
  );
}

ListPosts.propTypes = {
  posts: PropTypes.shape().isRequired,
};
