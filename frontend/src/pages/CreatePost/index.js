import React from 'react';

import Dropzone from 'react-dropzone';
import Navbar from '../../components/Navbar';
import { Container, DropContainer } from './styles';

export default function CreatePost() {
  return (
    <>
      <Navbar />
      <Container>
        <Dropzone accept="image/*" onDropAccepted={() => {}}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <p>teeste</p>
              <input {...getInputProps()} />
            </DropContainer>
          )}
        </Dropzone>
      </Container>
    </>
  );
}
