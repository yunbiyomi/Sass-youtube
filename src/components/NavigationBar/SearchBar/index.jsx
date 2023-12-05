import React from 'react'
import { ImSearch } from 'react-icons/im'
import { MdKeyboardVoice } from 'react-icons/md'
import { Tooltip } from 'react-tooltip'
import useWindowSize from '../../../helpers/useWindowSize'

const SearchBar = () => {
  const { width } = useWindowSize();

  return (
    <div className={`SearchBar ${width <= 640 ? 'smallSearch' : ''}`}>
      {
        width > 640 ?
        (
          <form>
            <input type='text' name='search' placeholder='검색' autoComplete='false'/>
            <button type='submit'>
            <ImSearch size={20} data-tooltip-content='검색' data-tooltip-id='navbar'/>
            </button>
          </form>
        ) :
        <button className='icon-container searchIcon'>
          <ImSearch size={20} data-tooltip-content='검색' data-tooltip-id='navbar'/>
        </button>
      }

      <button className='icon-container voiceIcon'>
        <MdKeyboardVoice size={25} data-tooltip-content='음성으로 검색' data-tooltip-id='navbar'/>
      </button>

      <Tooltip 
        id='navbar'
        place='bottom'
        effect='solid'
        delayHide={150}
        arrowColor='transparent'
        style={{
          backgroundColor:'gray',
          padding:'8px'
        }}
      />
    </div>
  )
}

export default SearchBar