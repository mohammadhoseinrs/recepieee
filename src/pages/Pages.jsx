import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipie from './Recipie'
import {Route , Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


export default function Pages() {
  const location=useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
    <Route path='/'  element={<Home/>}/>
    <Route path='/cuisine/:type'  element={<Cuisine/>}/>
    <Route path='/searched/:search'  element={<Searched/>}/>
    <Route path='/recipie/:name'  element={<Recipie/>}/>
    </Routes>
    </AnimatePresence>
    
  )
}
