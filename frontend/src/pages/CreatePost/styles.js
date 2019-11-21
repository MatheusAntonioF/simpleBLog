/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 8% auto 5%;
  padding: 10px;

  background-color: whitesmoke;

  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Form = styled.form`
  legend {
    font-weight: bold;
    color: #7159c1;
  }

  fieldset {
    border: 2px solid #ddd;
    padding: 15px;
    min-width: 670px;
    margin: auto auto;

    &:hover {
      border-color: #7159c1;
      background: #ddd;
      transition: border-color 1s, background 1s;
    }
  }

  label {
    color: #7159c1;
    font-weight: bold;
  }

  input {
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px;
    height: 25px;
    padding: 8px;
  }

  textarea {
    margin-top: 5px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    resize: none;
    border-radius: 5px;
    border: 1px;
  }

  button {
    border: 0;
    min-height: 35px;
    min-width: 100px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid;
    border-color: #7159c1;
    background-color: default;
    &:hover {
      background-color: #7259c1;
      color: white;
    }
  }
`;
