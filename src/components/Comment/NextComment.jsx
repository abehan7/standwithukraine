import React, { useState, useContext } from "react";
import styled from "styled-components";
import { HomeContext } from "../../router/Home";
export const CommentEl = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
export const CommentWrapper = styled.div`
  background-color: #fff;
  border-radius: 0.3rem;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Message = styled.input`
  width: 100%;
  font-size: 1.1rem;
  padding: 0.5rem;
  font-weight: 800;
  border: 0;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
  outline: 0;
  flex: 1;
`;

export const IconWrapper = styled.div`
  font-size: 1.1rem;
  font-weight: 800;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  align-items: center;
  flex: 1.3;
  height: 100%;
`;

export const Icon = styled.span`
  cursor: pointer;
`;

const NextComment = () => {
  const { handleClickNext, text, onChnageMessage } = useContext(HomeContext);

  const onChange = (e) => onChnageMessage(e);

  const onClick = () => handleClickNext();

  return (
    <CommentEl>
      <CommentWrapper>
        <Message
          onChange={onChange}
          value={text.message}
          placeholder="Write a comment..."
          autoComplete="false"
        />
        <RightIcon onClick={onClick} iconName="NEXT" />
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

export default NextComment;
