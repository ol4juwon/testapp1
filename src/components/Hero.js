import React from "react";
import styled from "styled-components";
import bgimg from "./img/Rectangle 5.png";

const Hero = () => {
  return (
    <Hero.Wrapper>
      <img src={bgimg} alt="mytestapp"></img>
      <div>Watch Something incredible</div>
    </Hero.Wrapper>
  );
};
Hero.Wrapper = styled.div`
  width: 100%;
  height: 600px;
  img {
    width: 100%;
    height: 550px;
  }
  div {
    position: absolute;
    width: 0;
    overflow: visible;
    font-size: 72px;
    font-weight: 700px;
    color: white;
    padding-left: 77px;
    padding-top: 77px;
  }
  @media only screen and (max-width: 320px) {
    height: 257px;
    width: 320px;
    img {
      width: 320px;
      height: 257px;
    }
    div {
      margin: 0 auto;
      padding-left: 23px;
      padding-right: 23px;
      text-align: center;
      width: 100%;
      color: red;
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 834px) {
    width: 100%;
    margin: 0 auto;

    img {
      width: 100%;
    }
    div {
      position: absolute;
      top:200px;
      width: auto;
      margin: 0 auto;
      word-spacing: 300px;
      text-align: center;
      color:white;
      font-size: 72px;
      margin: 0 auto;
      padding: 40px 0px;
    }
  }
`;
export default Hero;
