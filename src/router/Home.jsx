import React, { createContext, useState, useEffect } from "react";

import styled from "styled-components";
import Fonts from "../assets/Fonts";
import Indicator from "../components/Indicator/Indicator";
import PostContainer from "../components/Post/PostContainer";

import Colors from "../assets/Colors";
import NextComment from "../components/Comment/NextComment";
import SendComment from "../components/Comment/SendComment";

import { getComments } from "../Api";
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

const Bottom = styled.div`
  height: 20px;
`;

export const HomeContext = createContext(null);

const Home = () => {
  const [page, setPage] = useState(1);
  const [text, setText] = useState({
    message: "",
    author: "",
  });

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const data = await getComments();
      console.log(data);
    };

    fn();
  }, []);

  const onChnageMessage = (e) => {
    setText({ ...text, message: e.target.value });
  };

  const onChnageAuthor = (e) => {
    setText({ ...text, author: e.target.value });
  };

  const handleClickNext = () => {
    setPage(2);
  };
  const handleClickBack = () => {
    setPage(1);
  };

  const handleClickSend = () => {
    handleClickBack();
    setText({
      message: "",
      author: "",
    });
  };
  const initialState = {
    handleClickNext,
    handleClickBack,
    handleClickSend,
    onChnageMessage,
    onChnageAuthor,
    text,
  };
  return (
    <HomeContext.Provider value={initialState}>
      <HomeEl>
        <Title>
          #STAND<SubTitle>WITH</SubTitle>UKRAINE
        </Title>
        <Indicator />
        {page === 1 ? <NextComment /> : <SendComment />}
        <PostContainer />
        <Bottom />
      </HomeEl>
    </HomeContext.Provider>
  );
};

export default Home;
