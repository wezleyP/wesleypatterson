import React from 'react'
import MobileHeader from './MobileHeader'

import { isMobile, browserName } from "react-device-detect";
import { Link } from 'react-router-dom';

function Header() {
  return (
   <>
   {isMobile ? 
       <MobileHeader />
     : 
     <nav className='navWeb'>
       <ul className='headerUlLeft'>
         <li className='webli'>
            <Link to='/'>
              Home
            </Link>
         </li>
       </ul>
       <ul className='headerUlRight'>
         <li className='webli'>
            <Link to='/contact'>
              contact
            </Link>
         </li>
       </ul>
     </nav>
     }
   </>
   )
 }

export default Header