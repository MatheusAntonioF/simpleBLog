/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  margin-top: 3%;

  background: transparent;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 18px;
    text-rendering: optimizeLegibility;
    background-color: #eee;
    width: 180px;
    height: 35px;
    text-align: center;
    color: black;
    padding-top: 6px;
    border-radius: 5px;

    &:hover {
      font-size: 19px;
      background-color: black;
      color: #7159c1;
      transition: background-color 3s, color 2s;
    }
  }
`;
