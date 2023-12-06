import { IoMenu as Menu } from 'react-icons/io5'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../../assets/logo.png'
import { SideBarContext } from '../../../context/SideBarContext'

const LeftNav = () => {
  const { handleToggleSideBar } = useContext(SideBarContext);

  return (
    <div className='menu-logo'>
      <button 
        className='icon-container burgerMenu'
        onClick={handleToggleSideBar}
      >
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