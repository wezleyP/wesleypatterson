import React from 'react'
import Header from './Header'

import Xole from '../images/Xole.png'
import AI from '../images/AiFinders.png'
import Dart from '../images/Dartclub.png'

import Item from '../components/Item'
function Portfolio() {
  return (
   <>
    <Header />
    <div className='background'>
    <div className='grid'>
        <Item image = {Xole} link={"https://heyxole.netlify.app/"} />
        <Item image = {AI} link={"https://aifinders.netlify.app/"} />
        <Item image = {Dart} link={"https://dartclubhatco.netlify.app/"} />
      </div>
      
    </div>

   </>
  )
}

export default Portfolio