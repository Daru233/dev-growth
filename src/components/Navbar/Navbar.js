import React from 'react'
import { Link }  from 'react-router-dom'
import'./styles.css'
import logo from '../../shared/grow-svgrepo-com.svg'

export const Navbar = () => {
  return (
    <div className='nav_bar_container'>
      <h1 className='nav_title'>Dev Growth</h1>
      <nav>
        <ul className='nav_items'>
          <li className='link_container'><Link className='nav_link' to="/home"> Home </Link></li>
          <li className='link_container'><Link className='nav_link' to="/about"> About </Link>  </li>
          <li className='link_container'><Link className='nav_link' to="/error"> Error </Link></li>
        </ul>
      </nav>
    </div>
  )
}
