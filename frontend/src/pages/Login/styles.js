/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  margin: 10% auto;
  padding: 20px;
  & + div {
    margin: -9% auto;
    background-color: whitesmoke;
  }

  background: #f9f9f9;
  -webkit-box-shadow: 10px 10px 55px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 55px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 55px 0px rgba(0, 0, 0, 0.75);

  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;

  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    color: #7159c1;
  }

  hr {
    color: gray;
    border: 0.1px solid gray;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 10px;
    color: #7159c1;

    & + label {
      margin-top: 10px;
    }
  }

  input {
    width: 250px;
    height: 30px;
    margin-bottom: 10px;

    &:focus {
      height: 35px;
      transition: height 2s;
    }
  }

  small {
    font-size: 12px;
  }

  button {
    min-width: 250px;
    margin-top: 20px;
    height: 30px;

    color: black;
    background-color: #7159c1;
    font-weight: bold;

    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border: 0;
    outline: 0;

    &:hover {
      cursor: pointer;
      background-color: #907dcf;
      transition: background-color 1s;
    }
  }
`;
