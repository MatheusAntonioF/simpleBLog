/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const NavBar = styled.div`
  background: #eee;

  min-height: 10%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 15px;

  -webkit-border-bottom-right-radius: 5px;
  -webkit-border-bottom-left-radius: 5px;
  -moz-border-radius-bottomright: 5px;
  -moz-border-radius-bottomleft: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  h2 {
    color: #7159c1;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;

    &:hover {
      font-size: 16px;
      transition: font-size 0.5s;
    }
  }

  svg {
    color: #7159c1;
  }

  span {
    color: #7159c1;
  }
`;
