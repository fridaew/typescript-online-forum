import React from 'react'
import { ImHome } from 'react-icons/im' 
import { GiHamburgerMenu } from 'react-icons/gi' 
import { NavLink} from 'react-router-dom'
import './Nav.css'
import NavLogo from '../../assets/logo1.png';

const Nav = () => {
  return (
    <div className='navbar'>
      <NavLink to='/'><p className='navbar-home'><ImHome/></p></NavLink>  
      <div className="navlogo-container">
        <NavLink to='/'><img className='navlogo-image' src={NavLogo} /></NavLink> 
      </div>
      <p className='nav-menu'><GiHamburgerMenu/></p>
    </div>
  )
}

export default Nav