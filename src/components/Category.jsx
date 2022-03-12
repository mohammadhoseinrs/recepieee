import React from 'react'
import {FaPizzaSlice ,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import {BsHouseFill} from 'react-icons/bs'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Category() {
  return (
    <List>
        <SLink to={'/cuisine/italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/american'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/thai'}>
            <GiNoodles />
            <h4>thai</h4>
        </SLink>
        <SLink to={'/cuisine/japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List=styled.div`
 display:flex;
 justify-content:center;
 margin:1rem 0rem;
`

const SLink=styled(NavLink)`
  display:flex;
  flex-direction:coloumn;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  margin-right:2rem;
  text-decoration:none;
  background:linear-gradient(35deg ,#494949 , #313131)
  width:6rem;
  height:6rem;
  cursor:pointer;
  transform:scale(0.8);
  color:black;
  transition:all ease 0.2s;

  h4{
    color:black;
      font-size:0.8rem;
      margin-left:0.5rem
  }

  svg {
    color:black;
      font-size:1.5rem;

  }
  &.active{
    background:linear-gradient(to right,#f27121 , #e94057)

    svg {
        color:black;
    }
    h4 {
        color:black;
    }
  }
  &:hover{
      opacity:0.5
  }

`
