import React, { useState } from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function Search() {
    const [input,setinput]=useState('')
    const Navigate=useNavigate()

    const submitHandler=(event)=>{
        console.log('hiii');
        event.preventDefault()
        Navigate(`/searched/${input}`)
    }
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>

           <button><FaSearch></FaSearch></button> 
          <input type="text" value={input} onChange={(event)=>setinput(event.target.value)} />  
        </div>
        
    </FormStyle>
  )
}

const FormStyle=styled.form`
margin:0rem 10rem;


div{
    position:relative;
    width:100%;
}

    input{
        border:none;
        background:linear-gradient(35deg,#494949 , #313131);
        font-size:1.5rem;
        color:white;
        padding:1rem 3rem;
        border:none;
        border-radius:1rem;
        outline:none;
        width:100%;
    }

    button{
        background: transparent;
        border:none;
        font-size:1.5rem;
        position:absolute;
        top:50%;
        left:0%;
        transform:translate(100%,-50%);
        color:white;
        cursor:pointer;

    }

`