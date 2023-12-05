import { IoMenu as Menu } from 'react-icons/io5'
import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../../assets/logo.png'

const LeftNav = () => {
  return (
    <div className='menu-logo'>
      <button className='icon-container burgerMenu'>
        <Menu size={25} />
      </button>
      <div className='logo-container'>
        <Link to='/'>
          <img src={logoImg} alt='youtube logo' />
        </Link>
      </div>
    </div>
  )
}

export default LeftNav