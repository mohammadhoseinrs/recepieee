import React, { useEffect, useState } from 'react'
import { Wrapper,Card , Gradiant } from './Popular'
import { Splide ,SplideSlide } from '@splidejs/react-splide'
import {Link} from 'react-router-dom'


export default function Veggie() {
  const [veggie,setVeggie]=useState([])
    useEffect(()=>{
      getVeggie()
    },[])


    const getVeggie =async ()=>{
        const check=localStorage.getItem('veggie')
      
        if(check){

          setVeggie(JSON.parse(check))
            
        }else{
            
            const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
             const data=await api.json()
             setVeggie(data.recipes)
             console.log(data.recipes);
            localStorage.setItem('veggie',JSON.stringify(data.recipes))
            
        }
        
    }
  return (
    <>
     <Wrapper >
            <h3>Our Vegetarian Pics</h3>
            <Splide options={{
                perPage:3,
                arrows:false,
                pagination:false,
                drag:'free',
                gap:'5rem'
            }} >

            {veggie?.map(recepie=>{
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
