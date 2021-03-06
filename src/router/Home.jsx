import React, { createContext, useState } from "react";

import styled from "styled-components";
import Fonts from "../assets/Fonts";
import Indicator from "../components/Indicator/Indicator";
import PostContainer from "../components/Post/PostContainer";
import { debounce } from "lodash";
import Colors from "../assets/Colors";
import Comment from "../components/Comment/Comment";

import { fetchComment } from "../Api";
import Alert from "../components/Modal/Alert";
import { useComment } from "../contexts/CommentContext";
const HomeEl = styled.div`
  display: flex;

  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #f7f8fa;
`;

export const SubTitle = styled.span`
  color: ${Colors.Secondary};
  ${Fonts.Primary}
`;

export const Title = styled.h1`
  ${Fonts.Primary}
  color: ${Colors.Primary};
  display: flex;
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

const debounceFn = debounce((fn) => {
  fn();
}, 300);

const Home = () => {
  const [page, setPage] = useState(1);
  const [text, setText] = useState({ message: "", author: "", country: "" });

  const [modalOption, setModalOption] = useState({
    isOpen: false,
    message: "message",
    type: "",
  });

  const { addComment } = useComment();

  const fetchModal = (message, type) => {
    debounceFn.cancel();
    setModalOption({ isOpen: true, message, type });

    const fn = () => {
      const timer = setTimeout(() => {
        setModalOption({ isOpen: false, message, type });
      }, 1000);
    };

    debounceFn(fn);
  };

  const checkIsEmpty = (p, num, length, message) => {
    p === num && length !== 0 && setPage(page + 1);
    p === num && length === 0 && fetchModal(message, "process");
  };

  const handleClickNext = (p) => {
    checkIsEmpty(p, 1, text.message.length, "please write a message");
    checkIsEmpty(p, 2, text.author.length, "please write your name");
    checkIsEmpty(p, 3, text.country.length, "please write country");
  };

  const handleClickBack = () => {
    setPage(page - 1);
  };

  const handleClickSend = async () => {
    const fn = async () => {
      fetchModal("Your comment has been sent!", "success");
      setPage(1);
      console.log(text);
      const rdkey = Math.floor(Math.random() * 100000000000000);
      addComment({ ...text, date: "now", id: rdkey });
      fetchComment(text);
      setText({
        message: "",
        author: "",
        country: "",
      });
    };
    text.country.length === 0 &&
      fetchModal("please write your country", "process");
    text.country.length !== 0 && fn();
    // const fn = () => {};
    // (text.country.includes("from") || text.country.includes("From")) && fn();
  };

  const onChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  return (
    <HomeEl>
      <Alert
        message={modalOption.message}
        isOpen={modalOption.isOpen}
        type={modalOption.type}
      />
      <Title>
        #STAND<SubTitle>WITH</SubTitle>UKRAINE
      </Title>
      <Indicator />
      {/* <br />
      <br />
      <br /> */}
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
