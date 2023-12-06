import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import { AiFillHome, AiFillSetting } from 'react-icons/ai'
import { SiYoutubeshorts } from "react-icons/si"
import { MdSubscriptions, MdVideoLibrary } from 'react-icons/md'
import { RiHistoryLine, RiFlagFill } from 'react-icons/ri'
import { GoQuestion } from "react-icons/go";
import { IoChatboxEllipsesOutline } from "react-icons/io5"

const BigSideBar = () => {
  return (
    <aside className='big_sidebar'>
      <div className='big_sidebar_container'>
        <div className='sidebar_section'>
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
        </div>

        <div className='sidebar_section'>
          <Link to='/feed/library'>
            <div className='sidebar_icon_container'>
              <MdVideoLibrary size={23} className="sidebar_icon" data-tooltip-content='나' data-tooltip-id='sidebar' />
              <h4 className='sidebar_text'>나</h4>
            </div>
          </Link>
          <Link to='/feed/history'>
            <div className='sidebar_icon_container'>
              <RiHistoryLine size={23} className="sidebar_icon" data-tooltip-content='시청 기록' data-tooltip-id='sidebar' />
              <h4 className='sidebar_text'>시청 기록</h4>
            </div>
          </Link>
        </div>

        <div className='sidebar_section'>
          <Link to='/settings'>
            <div className='sidebar_icon_container'>
              <AiFillSetting size={23} className="sidebar_icon" data-tooltip-content='설정' data-tooltip-id='sidebar' />
              <h4 className='sidebar_text'>설정</h4>
            </div>
          </Link>
          <Link to='/report/history'>
            <div className='sidebar_icon_container'>
              <RiFlagFill size={23} className="sidebar_icon" data-tooltip-content='신고 기록' data-tooltip-id='sidebar'/>
              <h4 className='sidebar_text'>신고 기록</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className='sidebar_icon_container'>
              <GoQuestion size={23} className="sidebar_icon" data-tooltip-content='고객센터' data-tooltip-id='sidebar' />
              <h4 className='sidebar_text'>고객센터</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className='sidebar_icon_container'>
              <IoChatboxEllipsesOutline size={23} className="sidebar_icon" data-tooltip-content='의견 보내기' data-tooltip-id='sidebar'/>
              <h4 className='sidebar_text'>의견 보내기</h4>
            </div>
          </Link>
        </div>

        <Tooltip 
        id='sidebar'
        className='tooltip_sidebar'
        place='bottom'
        effect='solid'
        border='1px solid white'
        delayHide={150}
        noArrow='true'
      />
      </div>
    </aside>
  )
}

export default BigSideBar