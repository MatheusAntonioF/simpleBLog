/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 90%;
  min-height: 90%;
  margin: 100px;

  background: #f9f9f9;
  -webkit-box-shadow: 10px 10px 55px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 55px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 55px 0px rgba(0, 0, 0, 0.75);

  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
`;

export const ContainerPost = styled.div`
  padding-bottom: 15px;

  a {
    text-decoration: none;
  }

  h2 {
    padding: 15px 15px;
    &:hover {
      color: #7159c1;
      font-size: 23px;
      transition: font-size 1s;
    }
  }

  p {
    margin-top: -5px;
    padding-left: 15px;
    max-width: 50ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  hr {
    max-width: 97%;
    margin: 25px auto 10px;
    border: 1px solid gray;
    border-top: 0px solid;
    border-bottom: 1px solid gray;
  }
`;
