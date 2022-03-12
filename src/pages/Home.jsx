import React from 'react'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import '@splidejs/splide/dist/css/splide.min.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div>
        <Popular/>
        <Veggie />
    </motion.div>
  )
}
