import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import {
  CommentEl,
  CommentWrapper,
  Icon,
  IconWrapper,
  Message,
} from "./NextComment";
import { HomeContext } from "../../router/Home";

const BackIconWrapper = styled(IconWrapper)`
  justify-content: flex-start;
  padding-left: 0.5rem;
  font-size: 1.3rem;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1.3;
`;
const SendComment = () => {
  const { handleClickSend, handleClickBack, onChnageAuthor, text } =
    useContext(HomeContext);

  const onChange = (e) => onChnageAuthor(e);

  const onClickSend = () => handleClickSend();

  const onClickBack = () => handleClickBack();

  return (
    <CommentEl>
      <CommentWrapper>
        <Message
          onChange={onChange}
          value={text.author}
          placeholder="Write your name..."
          autoComplete="false"
        />
        <IconContainer>
          <LeftIcon onClick={onClickBack} />
          <RightIcon onClick={onClickSend} iconName="SEND" />
        </IconContainer>
      </CommentWrapper>
    </CommentEl>
  );
};

const RightIcon = ({ onClick, iconName }) => {
  return (
    <IconWrapper>
      <Icon onClick={onClick}>{iconName}</Icon>
    </IconWrapper>
  );
};

const LeftIcon = ({ onClick, iconName = "back" }) => {
  return (
    <BackIconWrapper>
      <Icon onClick={onClick}>
        <IoIosArrowBack />
      </Icon>
    </BackIconWrapper>
  );
};

export default SendComment;
