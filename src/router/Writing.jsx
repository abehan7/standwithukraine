import React from "react";
import styled from "styled-components";
import Colors from "../assets/Colors";
import { SubTitle, Title } from "./Home";

const WritingEl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    ${Colors.Primary} 0%,
    ${Colors.Primary} 50%,
    ${Colors.Secondary} 50%,
    ${Colors.Secondary} 100%
  );
`;
const Writing = () => {
  return (
    <WritingEl>
      <Title>
        #WRITE<SubTitle>FOR</SubTitle>UKRAINE
      </Title>
    </WritingEl>
  );
};

export default Writing;
