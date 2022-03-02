import React from "react";

import styled from "styled-components";
import Fonts from "../assets/Fonts";
import Indicator from "../components/Indicator/Indicator";
import PostContainer from "../components/Post/PostContainer";
import Comment from "../components/Comment/Comment";
import Colors from "../assets/Colors";

const HomeEl = styled.div`
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

export const SubTitle = styled.span`
  color: #fff;
  ${Fonts.Primary}
`;

export const Title = styled.h1`
  ${Fonts.Primary}
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: 330px) {
    font-size: 1.5rem;
    padding: 1rem;
  }
`;
const Home = () => {
  return (
    <HomeEl>
      <Title>
        #STAND<SubTitle>WITH</SubTitle>UKRAINE
      </Title>
      <Indicator />
      <Comment />
      <PostContainer />
    </HomeEl>
  );
};

export default Home;
