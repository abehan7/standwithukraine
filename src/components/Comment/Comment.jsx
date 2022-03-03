import React, { useState } from "react";
import styled from "styled-components";
const CommentEl = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
const CommentWrapper = styled.div`
  background-color: #fff;
  border-radius: 0.3rem;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Message = styled.input`
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
const Author = styled.span``;

const IconWrapper = styled.div`
  font-size: 1.1rem;
  font-weight: 800;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  align-items: center;
  flex: 1.3;
`;
const Icon = styled.span`
  cursor: pointer;
`;
const Comment = () => {
  const [text, setText] = useState({
    value: "",
    message: "",
    author: "",
    page: 1,
    placeholder: "Write a comment...",
    name: "message",
  });

  const onChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickNext = () => {
    text.page === 1 &&
      setText({
        ...text,
        page: 2,
        placeholder: "Write a name...",
        name: "author",
      });
    text.page === 2 &&
      setText({
        message: "",
        author: "",
        page: 1,
        placeholder: "Write a comment...",
        name: "message",
      });
  };
  return (
    <CommentEl>
      <CommentWrapper>
        <Message
          onChange={onChange}
          value={text.value}
          placeholder={text.placeholder}
          name={text.name}
        />

        {/* {text.page === 2 && (
          <Message
            onChange={onChange}
            value={text.author}
            placeholder={text.placeholder}
            name={text.name}
          />
        )} */}
        {text.page === 1 && (
          <RightIcon onClick={handleClickNext} iconName="NEXT" />
        )}
        {text.page === 2 && (
          <RightIcon onClick={handleClickNext} iconName="SEND" />
        )}
      </CommentWrapper>
    </CommentEl>
  );
};

const RightIcon = ({ onClick, iconName }) => {
  return (
    <IconWrapper onClick={onClick}>
      <Icon>{iconName}</Icon>
    </IconWrapper>
  );
};

export default Comment;
