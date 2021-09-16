import React from "react";
import {useEffect,useState} from "react"
import styled from "styled-components";
const SearchBar = () => {
  
  return (
    <SearchBar.Wrapper>
      <form>
        <label>Search</label>
        <input className="searchBox" name="search" type="text" />
      </form>
    </SearchBar.Wrapper>
  );
};
SearchBar.Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top:20px;
  margin-bottom: 20px;
  form{
      width: 100%;
  }
  .searchBox {
      margin-top: 5px;
    border: 1px solid black;
    width: 100%;
    height:30px;
    font-size:24px;
  }
`;
export default SearchBar;
