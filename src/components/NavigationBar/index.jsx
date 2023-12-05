import React from 'react'
import LeftNav from './LeftNav'
import SearchBar from './SearchBar'
import RightNav from './RightNav'
import { BiArrowBack } from 'react-icons/bi'
import { ImSearch } from 'react-icons/im'
import { MdKeyboardVoice } from 'react-icons/md'
import useWindowSize from '../../helpers/useWindowSize'

const NavigationBar = () => {
  const { width } = useWindowSize();

  const specialSearchBarRender = (
    <div className='special_searchbar'>
      <button>
        <BiArrowBack size={25} />
      </button>
      <form>
        <input type='text' name='search' placeholder='검색' autoComplete='false'/>
        <button type='submit'>
          <ImSearch size={20} data-tooltip-content='검색' data-tooltip-id='navbar'/>
        </button>
      </form>
      <button className='icon-container voiceIcon'>
        <MdKeyboardVoice size={25} data-tooltip-content='음성으로 검색' data-tooltip-id='navbar'/>
      </button>
    </div>
  )

  return (
    <nav className='Navbar'>
      {
        width <= 640 
          ? specialSearchBarRender
          : <>
              <LeftNav />
              <SearchBar />
              <RightNav />
            </>
      }
    </nav>
  )
}

export default NavigationBar