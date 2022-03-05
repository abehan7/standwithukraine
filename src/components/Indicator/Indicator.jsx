import React from "react";
import styled from "styled-components";
import { IoChatbubbleOutline } from "react-icons/io5";

import { useComment } from "../../contexts/CommentContext";
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
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 800;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 800;
`;

const BubbleIcon = styled(Icon)``;

const Indicator = () => {
  const { comments } = useComment();

  return (
    <IndicatorEl>
      <IconWrapper>
        <BubbleIcon>
          <IoChatbubbleOutline />
        </BubbleIcon>
        <SubTitle>{comments?.length} comments</SubTitle>
      </IconWrapper>
    </IndicatorEl>
  );
};

export default Indicator;
