import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Header.Wrapper><h1>MyTestApp</h1></Header.Wrapper>;
};
Header.Wrapper = styled.div`
  background: #292929;
  margin: 0 auto;
  width: 100%;
  height: 60px;
  color: white;
  padding:10px;
`;

export default Header;
