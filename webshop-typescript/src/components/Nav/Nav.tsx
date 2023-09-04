import React from 'react'
import { ImHome } from 'react-icons/im' 
import { GiHamburgerMenu } from 'react-icons/gi' 
import './Nav.css'

const Nav = () => {



  return (
    <div className='navbar'>
        <p className='navbar-home'><ImHome/></p>
        <p className='nav-menu'><GiHamburgerMenu/></p>
    </div>
  )
}

export default Nav