import React from 'react';
import SearchBar from "./searchbar/SearchBar";
import styled from "styled-components";
const ModalContainer = styled.div`
  padding: 1em;
  background: #3a3a3a;
  height: 20vh;
  width: 60vw;
  border-radius: 4px;
`
const Modal = () => {
    return (
        <ModalContainer>
            <SearchBar/>

        </ModalContainer>
    );
};

export default Modal;