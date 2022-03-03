import React from "react";
import styled from "styled-components";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiThumbsUp } from "react-icons/fi";
import Colors from "../../assets/Colors";
import { useNavigate } from "react-router-dom";
const IndicatorEl = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.9rem 1.7rem;
  gap: 1rem;
  position: relative;
`;
const Icon = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  ::before {
    background-color: ${Colors.Secondary};
    transform: translate(50%, -50%);
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 800;
    font-size: 0.8rem;
    border-radius: 50%;
    padding: 0.3rem;
    z-index: 1;
  }
`;

const ThumbIcon = styled(Icon)`
  ::before {
    content: "222";
  }
`;
const BubbleIcon = styled(Icon)`
  ::before {
    content: "222";
  }
`;

const Indicator = () => {
  const navigator = useNavigate();
  const onClickBubble = () => {
    // navigator("/writing");
  };
  return (
    <IndicatorEl>
      <ThumbIcon>
        <FiThumbsUp />
      </ThumbIcon>
      <BubbleIcon onClick={onClickBubble}>
        <IoChatbubbleOutline />
      </BubbleIcon>
    </IndicatorEl>
  );
};

export default Indicator;
