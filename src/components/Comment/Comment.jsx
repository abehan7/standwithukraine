import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

import Colors from "../../assets/Colors";

export const CommentEl = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
export const CommentWrapper = styled.div`
  /* background-color: #fff; */
  border-radius: 0.3rem;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Message = styled.input`
  width: 100%;
  font-size: 1.1rem;
  padding: 0.5rem;
  padding-right: 2rem;
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

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

export const Icon = styled.span`
  cursor: pointer;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

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
const Index = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1rem;
  font-weight: 800;
  padding: 0.41rem;
  color: ${Colors.Primary};
`;
const Comment = ({
  onClickBack,
  onClickForward,
  onChange,
  text,
  placeholder,
  rightIconName,
  leftIconName,
  type,
  name,
  index,
}) => {
  return (
    <CommentEl>
      <CommentWrapper>
        <Message
          onChange={onChange}
          value={text}
          placeholder={placeholder}
          autoComplete="off"
          name={name}
        />

        <IconContainer>
          {type === "both" && (
            <LeftIcon onClick={onClickBack} iconName={leftIconName} />
          )}
          <RightIcon onClick={onClickForward} iconName={rightIconName} />
        </IconContainer>
        <Index>{index}</Index>
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

export default Comment;
