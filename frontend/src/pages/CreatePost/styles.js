/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 10% auto;
  padding: 10px;

  background-color: whitesmoke;

  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropZone',
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2 ease;

  ${props => props.isDragActive && dragActive}
  ${props => props.isDragReject && dragReject}
`;
