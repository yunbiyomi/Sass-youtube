import React from 'react'
import {MdNotifications, MdVideoCall} from 'react-icons/md'

const RightNav = () => {
  return (
    <div className='buttons'>
      <button className='icon-container'>
        <MdVideoCall size={25} data-tooltip-content='만들기' data-tooltip-id='navbar' />
      </button>
      <button className='icon-container'>
        <MdNotifications size={25} data-tooltip-content='알림' data-tooltip-id='navbar' />
      </button>
    </div>
  )
}

export default RightNav