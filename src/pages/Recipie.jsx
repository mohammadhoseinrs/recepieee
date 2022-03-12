
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
export default function Recipie() {
    const [details,setdetails]=useState({})
    const [activetab,setactivetab]=useState('Instructions')
    const params=useParams()
    const fetchDetails=async()=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData=await data.json()
        setdetails(detailData)

    }

    useEffect(()=>{
        fetchDetails()
    },[params.name])
  return (
    <DetailWrapper>
        <motion.div
        initial={{y:-1000}}
        animate={{y:0}}
        transition={{duration:0.9}}
        >
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </motion.div>
        <Info
        initial={{x:1000}}
        animate={{x:0}}
        transition={{duration:0.9}}
        >
            <Button className={activetab=='Instructions' ? 'active' : ''} onClick={()=>setactivetab('Instructions')}>Instructions</Button>
            <Button className={activetab=='Ingredient' ? 'active' : ''}  onClick={()=>setactivetab('Ingredient')}>Ingredient</Button>
            {activetab==='Instructions' ? (
                <div>
                <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html:details.instructions}} ></h3>
            </div>
            ):(
              <ul>
                {details.extendedIngredients.map((ingredient)=>(
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>   
            )}
            
           
        </Info>
    </DetailWrapper>
  )
}


const DetailWrapper=styled.div`
    margin-top:2rem;
    margin-bottom:2rem;
    display:flex;
    
    .active{
        background:linear-gradient(35deg,#494949 , #313131);
        color:white;
        
    }
    h2{
        margin-bottom:2rem
    }
    li{
        font-size:1.2rem
        line-height:2.5rem
    }
    ul{
        margin-top:2rem;
    }
    img{
        width:400px;
        border-radius:20px;
        height:auto;
    }
    h3{
        font-size:15px;
        line-height:20px;
        font-weight:300;
    }
`

const Button=styled.button`
    padding:1rem 2rem;
    color:#313131;
    background:white;
    borde:2px solid black;
    margin-right:2rem;
    font-weight:600;
    cursor:pointer;

`
const Info=styled(motion.div)`
margin-left:2rem
`