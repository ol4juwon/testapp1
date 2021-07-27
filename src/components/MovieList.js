import React from 'react'
import styled from "styled-components"

const MovieList = (props) => {
    return (
        <MovieList.Wrapper>
       <div className="image">
            <img src={props.pict} alt={props.name} width="200px" height="200px" />
            </div>
            <div className="title">
            <p>{props.name}</p>
            </div>
        </MovieList.Wrapper>
    )
}
MovieList.Wrapper = styled.div`    
        height: 200px;
        width:100%;
        position:relative;
        margin: 0px 13px;
        padding
        
        .image,.title{
            position: absolute;
           
        }
        .title{
             top: 80px;
            width:100%;
            margin: 0 auto;
            text-align:center;
            p{
                margin: 0 auto;
                text-align: center;
            }
            z-index:3;
            color:white;
            background:rgba(0,0,0, .6);
        }
        .image{

            border-radius:15px;
            top:0;
            left: 0;
            img{
                border-radius: 12px;
            }
            
        }


 
`

export default MovieList
