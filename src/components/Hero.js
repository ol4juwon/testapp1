import React from "react";
import styled from "styled-components";
import bgimg from "./img/Rectangle 5.png";

const Hero = () => {
  return (
    <Hero.Wrapper>
      <img src={bgimg} alt="mytestapp"></img>
      <p>Watch Something incredible</p>
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
  p {
    position: absolute;
    width: 490px;
    font-size: 72px;
    font-weight: 700px;
    color: white;
    padding-left: 77px;
    padding-top: 77px;
  }
`;
export default Hero;
