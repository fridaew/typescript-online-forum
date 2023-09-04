import React from 'react'
import { ImHome } from 'react-icons/im' 
import { GiHamburgerMenu } from 'react-icons/gi' 
import { NavLink} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div className='navbar'>
      <NavLink to='/'><p className='navbar-home'><ImHome/></p></NavLink>  
      <h5>Beer Forum</h5>
      <p className='nav-menu'><GiHamburgerMenu/></p>
    </div>
  )
}

export default Nav