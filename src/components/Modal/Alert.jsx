import React from "react";
import styled from "styled-components";
import { AiOutlineAlert } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
const AlertEl = styled.div`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? "0.9" : "0")};
  z-index: 1;

  transition: 300ms;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fe7ec2;
  /* #FD1790 */
  width: 90%;
  height: 50px;
  border-radius: 10px;
  color: #fff;
`;
const ModalWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;
const Message = styled.span`
  font-weight: 800;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fc1977;
  width: 2rem;
  height: 2rem;
  font-size: 1.4rem;
  border-radius: 50%;
`;
const Alert = ({ message, isOpen, type }) => {
  return (
    <AlertEl isOpen={isOpen}>
      <ModalWindow>
        <Icon>
          {type === "success" ? <MdOutlineDownloadDone /> : <AiOutlineAlert />}
        </Icon>
        <Message>{message}</Message>
      </ModalWindow>
    </AlertEl>
  );
};

export default Alert;
