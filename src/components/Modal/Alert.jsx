import React from "react";
import styled from "styled-components";
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalWindow = styled.div``;
const Alert = ({ message, type }) => {
  return (
    <Overlay>
      <ModalWindow></ModalWindow>
    </Overlay>
  );
};

export default Alert;
