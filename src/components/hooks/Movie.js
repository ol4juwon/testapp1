import {useEffect,useState} from "react"
import React from 'react'

const Movie = () => {
   
   const [movies,setMovies] = useState([]);
const OMDB = "https://www.omdbapi.com/?apikey=3bfa5f71&s="
   function request(url){
       var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
       return fetch(url,requestOptions)
      .then((response) => response.json())
      .then((data) => data.Search)
      .catch((error) => {
        console.log(error);
      });
   }
   const getMovies = async (name) => {
       const movieName = name || "widow";
      // console.log("movie title is:"+movieName)
    const res = await fetchMovies(movieName);
    setMovies(res);
  };

 

  const fetchMovies = async (name) => {
    const res = await request(OMDB+name);
    //console.log(res)
    return res;
  };
  return {getMovies,movies,fetchMovies}
}

export default Movie;
