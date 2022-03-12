import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide ,SplideSlide } from '@splidejs/react-splide'
import { Link } from 'react-router-dom'


export default function Popular() {


    const [popular,setPopular]=useState([])
    useEffect(()=>{
        getPopular()
    },[])


    const getPopular =async ()=>{
        const check=localStorage.getItem('popular')
      
        if(check){

            setPopular(JSON.parse(check))
            
        }else{
            
            const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
             const data=await api.json()
             setPopular(data.recipes)
             console.log(data.recipes);
            localStorage.setItem('popular',JSON.stringify(data.recipes))
            
        }
        
    }
    


  return (
    <>
    
        <Wrapper >
            <h3>Popular Pics</h3>
            <Splide options={{
                perPage:4,
                drag:'free',
                gap:'5rem'
            }} >

            {popular?.map(recepie=>{
                return(
                    <SplideSlide key={recepie.id}>
                    <Card >
                        <Link to={`/recipie/${recepie.id}`}>
                        <p>{recepie.title}</p>
                        <img src={recepie.image} alt={recepie.title} />
                        <Gradiant />
                        </Link>
                    </Card>
                    </SplideSlide>
                )
            })}
            </Splide>
        </Wrapper>
    
    
    
    </>
  )
}

export const Wrapper =styled.div`
margin:1rem 0rem;
`;

export const Card=styled.div`
    min-height:10rem;
    width:200px;
    border-radius:2rem;
    overflow:hidden;
    position:relative;
    img {
        border-radius:2rem;
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }

    p{
        position:absolute;
        z-index:10;
        left:50%;
        bottom:0;
        transform:translate(-50%,0%);
        color:white;
        width:100%;
        text-align:center;
        font-weight:600;
        height:40%;
        display:flex;
        justify-content:center;
        align-items:center;
    }

`;

export const Gradiant=styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`

