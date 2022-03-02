import React from "react";
import styled from "styled-components";
import Post from "./Post";
const PostContainerEl = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  margin-bottom: 2rem;
`;

const datas = [
  {
    id: "gdawefa",
    name: "ana",
    msg: "we support the people who are fighting for their rights  ",
  },
  { id: "gdawefb", name: "james", msg: "go away putin" },
  { id: "gdawefc", name: "paul", msg: "we support ukraine" },
  { id: "gdawefd", name: "mattew", msg: "peace in ukraine" },
  { id: "gdaweff", name: "jack", msg: "help us to fight for ukraine" },
  {
    id: "gdawefa",
    name: "allen",
    msg: "we support the people who are fighting for their rights",
  },
  { id: "gdawefb", name: "elon", msg: "go away putin" },
  { id: "gdawefc", name: "john", msg: "we support ukraine" },
  {
    id: "gdawefa",
    name: "ana",
    msg: "we support the people who are fighting for their rights",
  },
  { id: "gdawefb", name: "james", msg: "go away putin" },
  { id: "gdawefc", name: "paul", msg: "we support ukraine" },
  { id: "gdawefd", name: "mattew", msg: "peace in ukraine" },
  { id: "gdaweff", name: "jack", msg: "help us to fight for ukraine" },
  {
    id: "gdawefa",
    name: "allen",
    msg: "we support the people who are fighting for their rights",
  },
  { id: "gdawefb", name: "elon", msg: "go away putin" },
  { id: "gdawefc", name: "john", msg: "we support ukraine" },
  {
    id: "gdawefa",
    name: "ana",
    msg: "we support the people who are fighting for their rights",
  },
  { id: "gdawefb", name: "james", msg: "go away putin" },
  { id: "gdawefc", name: "paul", msg: "we support ukraine" },
  { id: "gdawefd", name: "mattew", msg: "peace in ukraine" },
  { id: "gdaweff", name: "jack", msg: "help us to fight for ukraine" },
  {
    id: "gdawefa",
    name: "allen",
    msg: "we support the people who are fighting for their rights",
  },
  { id: "gdawefb", name: "elon", msg: "go away putin" },
  { id: "gdawefc", name: "john", msg: "we support ukraine" },
  {
    id: "gdawefa",
    name: "ana",
    msg: "we support the people who are fighting for their rights",
  },
  { id: "gdawefb", name: "james", msg: "go away putin" },
  { id: "gdawefc", name: "paul", msg: "we support ukraine" },
  { id: "gdawefd", name: "mattew", msg: "peace in ukraine" },
  { id: "gdaweff", name: "jack", msg: "help us to fight for ukraine" },
  {
    id: "gdawefa",
    name: "allen",
    msg: "we support the people who are fighting for their rights",
  },
  { id: "gdawefb", name: "elon", msg: "go away putin" },
  { id: "gdawefc", name: "john", msg: "we support ukraine" },
];

const PostContainer = () => {
  return (
    <PostContainerEl>
      {datas.map((data, index) => (
        <Post msg={data.msg} author={data.name} key={index} />
      ))}
    </PostContainerEl>
  );
};

export default PostContainer;
