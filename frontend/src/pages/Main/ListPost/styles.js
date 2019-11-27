/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 90%;
  margin: 5% auto;
  background-color: #ddd;
  border-radius: 5px;
  padding-top: 12px;
  padding-bottom: 12px;
  a {
    text-decoration: none;
    color: #7159c1;
  }
`;

export const Fieldset = styled.fieldset`
  padding: 15px;
  background-color: whitesmoke;
  margin: 15px !important;
  border-radius: 5px;

  div {
    legend {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 8px;
    }
    p {
      font-size: 15px;
    }
    span {
      font-style: italic;
    }
  }
  p {
    max-width: 100ch;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    margin-left: 0;
    width: 99%;
    background: #7159c1;
    color: #eee;
    border: 0;
    outline: 0;
    transition: width 1s, background 1s;
    cursor: pointer;
  }
`;
