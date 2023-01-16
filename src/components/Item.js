import React from 'react'
import '../index.css';
import {motion} from 'framer-motion'

export default function Item(props) {
  return (
      <motion.div 
         whileHover={{scale:1.1}}
         className='grid-item'>
         <a target="_blank" href={props.link}>
            <img className='itemImage' src={props.image} />
         </a>
      </motion.div>
  )
}