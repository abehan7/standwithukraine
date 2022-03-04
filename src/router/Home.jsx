import React, { createContext, useState, useEffect } from "react";

import styled from "styled-components";
import Fonts from "../assets/Fonts";
import Indicator from "../components/Indicator/Indicator";
import PostContainer from "../components/Post/PostContainer";

import Colors from "../assets/Colors";
import Comment from "../components/Comment/Comment";
import { getNewMessage, writeUserData, getMessages } from "../Api";

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
    country: "",
  });

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fn = async () => {
      // await writeUserData("name2", "email2", "imageUrl2");
      // await getNewMessage();
      await getMessages();
    };

    fn();
  }, []);

  const checkIsEmpty = ({ p, num, length, type }) => {
    p === num && length !== 0 && setPage(page + 1);
    p === num && length === 0 && alert(`Please ${type} a message`);
  };

  const handleClickNext = (p) => {
    checkIsEmpty(1, text.message.length, "message");
    checkIsEmpty(2, text.author.length, "author");
    checkIsEmpty(3, text.country.length, "country");
  };
  const handleClickBack = () => {
    setPage(page - 1);
  };

  const handleClickSend = async () => {
    setPage(1);
    console.log(text);
    setText({
      message: "",
      author: "",
      country: "",
    });
  };

  const onChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  return (
    <HomeEl>
      <Title>
        #STAND<SubTitle>WITH</SubTitle>UKRAINE
      </Title>
      <Indicator />
      {page === 1 && (
        <Comment
          onClickBack={() => {}}
          onClickForward={() => handleClickNext(1)}
          onChange={onChange}
          text={text.message}
          placeholder="Write a comment..."
          rightIconName="NEXT"
          type="one"
          name="message"
          page={page}
          index={`${page}/3`}
        />
      )}
      {page === 2 && (
        <Comment
          onClickBack={handleClickBack}
          onClickForward={() => handleClickNext(2)}
          onChange={onChange}
          text={text.author}
          placeholder="Write your name..."
          rightIconName="NEXT"
          type="both"
          name="author"
          page={page}
          index={`${page}/3`}
        />
      )}
      {page === 3 && (
        <Comment
          onClickBack={handleClickBack}
          onClickForward={() => handleClickSend(3)}
          onChange={onChange}
          text={text.country}
          placeholder="From"
          rightIconName="NEXT"
          type="both"
          name="country"
          page={page}
          index={`${page}/3`}
        />
      )}
      <PostContainer />
      <Bottom />
    </HomeEl>
  );
};

export default Home;
