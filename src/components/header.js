import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Header.Wrapper>
      <h1>MyTestApp</h1>
    </Header.Wrapper>
  );
};
Header.Wrapper = styled.div`
  background: #292929;
  margin: 0 auto;
  width: 100%;
  color: white;
  h1 {
    padding-left: 77px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media only screen and (max-width: 321px) {
    width: 100%;
    margin: 0 auto;
    align-items: center;
    h1 {
      padding: 2px;
      border: 1px solid white;
      color: red;
      text-align: center;
      justify-self: center;
    }
  }
  @media only screen and (max-width: 834px) {
    width: 100%;
    margin: 0 auto;
    align-items: center;
    h1 {
      padding: 2px;
      border: 1px solid white;
      margin: 0 auto;
      text-align: center;
      justify-self: center;
    }
  }
`;

export default Header;
