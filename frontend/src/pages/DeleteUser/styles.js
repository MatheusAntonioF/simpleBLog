/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 70%;
  margin: 5% auto;
  background: whitesmoke;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 5%;

  fieldset {
    border-radius: 5px;
    margin: 15px 0;
  }

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 5px;

    div {
      display: flex;
    }
    & {
      margin-top: 10px;
    }
    h3 {
      padding-left: 5px;
      color: #7159c1;
      margin-bottom: 5px;
    }
    h4 {
      padding-left: 15px;
      margin-bottom: 8px;
    }

    &:hover {
      font-size: 18px;
    }

    svg {
      position: absolute;
      right: 260px;

      &:hover {
        color: #7159c1;
        cursor: pointer;
      }
    }
  }
`;
