import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid , Card } from './Cuisine'
import { Link } from 'react-router-dom'

export default function Searched() {

    const params=useParams()

    const [searchRecipe,setsearchRecipe]=useState([])
    const getSearched =async (name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes=await data.json()
        setsearchRecipe(recipes.results)
    }
    useEffect(()=>{
        getSearched(params.search)
    },[params.search])
  return (
    <Grid>
        {searchRecipe.map((item)=>(
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
