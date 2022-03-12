import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link,useParams } from 'react-router-dom'


export default function Cuisine() {

    const [cuisine,setCuisine]=useState([])

    const params=useParams()
    console.log(params.type);


    const getCuisine =async (name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes=await data.json()
        setCuisine(recipes.results)
    }
    
    useEffect(()=>{
        getCuisine(params.type)
    },[params.type])
    console.log(cuisine);

    return(
        <Grid
        animate={{opacity:1 , x:0}}
        initial={{opacity:0 , x:1000}}
        exit={{opacity:0}}
        transition={{duration:0.9 }}
        >
            {cuisine.map((item)=>(
                <Card key={item.id}>
                    <Link to={`/recipie/${item.id}`}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            ))}
        </Grid>
    )
 
}

export const Grid=styled(motion.div)`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
    grid-gap:3rem;
`
export const Card=styled.div`
img {
    width:100%;
    border-radius:2rem;
}
a{
    text-decoration:none
}
h4{
    tetx-align:center;
    padding:1rem;
}
`
