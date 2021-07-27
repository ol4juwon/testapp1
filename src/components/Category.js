import React from "react";
import {useEffect,useState} from "react"
import styled from "styled-components";
import Movie from "../components/hooks/Movie";
import MovieList from '../components/MovieList';
const Category = (props) => {
    const {movies,fetchMovies,getMovies} = Movie();
    useEffect(() => {
       getMovies(props.category)
    }, []);
  return (
    <Category.Wrapper>
    <div className="cate">
    <h1>{props.category}</h1>

  </div>
  <div className="movies">

{
    movies.map((data) => (

         <MovieList key={data.ImdbId} name={data.Title} pict={data.Poster}/>
        
    ))
}
    </div>
    
    </Category.Wrapper>
  );
};
Category.Wrapper = styled.div`
  width: 100%;
 padding-left: 60px;
  margin: 0 auto;
 	
     display: flex;
     flex-direction: column ;
     .cate{
         width: 100%;
         text-align:right;
         h1{
             color:black;
         }
     }
     .movies{
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        display: flex;
        flex-direction:row;
      
	
    
     }

`;
export default Category;
