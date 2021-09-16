import React from "react";
import styled from "styled-components";
import Header from "../header";
import Hero from "../Hero";
import SearchBar from "../SearchBar";
import Category from "../Category";
const Home = () => {
  return (
    <Home.Wrapper>
      <Header></Header>
      <Hero></Hero>
      <SearchBar></SearchBar>
      <Category category="Widow"></Category>
      <Category category="Superman"></Category>
      <Category category="Avenger"></Category>

    </Home.Wrapper>
  );
};

Home.Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  div {
    display: flex;
    flex-direction: row nowrap;
  }
`;

export default Home;
