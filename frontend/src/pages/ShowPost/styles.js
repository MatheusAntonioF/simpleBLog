/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 90%;
  margin: 5% auto;
  background-color: #ddd;
  border-radius: 5px;
  padding: 12px;

  div {
    h3 {
      margin-left: 5px;
      margin-bottom: 5px;
    }
    h4 {
      margin-top: -25px;
      margin-left: 5px;
      margin-bottom: 15px;
    }
    p {
      padding: 5px;
      margin-top: 5px;
    }
    span {
      p {
        margin-left: 87.5%;
      }
    }
    svg {
      margin-left: 90%;
      background: #eee;
      border-radius: 50px;
      color: #7159c1;

      &:hover {
        cursor: pointer;
        background: #7159c1;
        color: white;
        transition: color 1s, background 1s;
      }
    }

    &:hover {
      p {
        font-size: 15px;
      }
    }
  }
`;

export const CatchMessage = styled.div`
  max-width: 45%;
  margin: 15% auto;
  text-align: center;
  background-color: #ddd;
  border-radius: 5px;
  padding: 12px;
`;
