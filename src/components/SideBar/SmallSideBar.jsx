import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { SiYoutubeshorts } from "react-icons/si"
import { MdSubscriptions, MdVideoLibrary } from 'react-icons/md'

const SmallSideBar = () => {
  return (
    <aside className='small_sidebar'>
      <div className='small_sidebar_container'>
        <Link to='/'>
          <div className='sidebar_icon_container'>
            <AiFillHome size={23} className="sidebar_icon" data-tooltip-content='홈' data-tooltip-id='sidebar' />
            <h4 className='sidebar_text'>홈</h4>
          </div>
        </Link>
        <Link to='/feed/explore'>
          <div className='sidebar_icon_container'>
            <SiYoutubeshorts size={23} className="sidebar_icon" data-tooltip-content='Shorts' data-tooltip-id='sidebar' />
            <h4 className='sidebar_text'>Shorts</h4>
          </div>
        </Link>
        <Link to='/'>
          <div className='sidebar_icon_container'>
            <MdSubscriptions size={23} className="sidebar_icon" data-tooltip-content='구독' data-tooltip-id='sidebar' />
            <h4 className='sidebar_text'>구독</h4>
          </div>
        </Link>
        <Link to='/feed/library'>
          <div className='sidebar_icon_container'>
            <MdVideoLibrary size={23} className="sidebar_icon" data-tooltip-content='나' data-tooltip-id='sidebar' />
            <h4 className='sidebar_text'>나</h4>
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default SmallSideBar