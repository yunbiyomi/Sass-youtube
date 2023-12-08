import React from 'react'
import { Link } from 'react-router-dom'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const VideoCard = (id, video) => {
  console.log(id);
  return (
    <div className='videoCard'>
      <Link to={`/video/${id}`} state={{...video}}>
        <div className='video_preview'>
          <img src={id.img} alt={id.info.title} />
          {
            id.eInfo.duration 
              ?
                <div>
                  <span>{id.eInfo.duration}</span>
                </div>
              : null
          }
        </div>

        <div className='video_info_container'>
          <div className="avatar_container">
            <img 
              src={id.img} 
              alt={`${id.info.channelTitle} avatar`} 
              className='avatar'
            />
          </div>

          <div className='video_text_container'>
            <h3>
              {
                id.info.title.length > 60
                ? (id.info.title.substring(0, 60) + '...')
                : id.info.title
              }
            </h3>
            <div className="video_info">
              <Link to={`/channel/${id.channelInfo.customUrl}`}>
                <div className="channelName">
                  {id.info.channelTitle}
                </div>
              </Link>
              <div className="video_metadata">
                <span>{id.eInfo.viewCount}views &nbsp; </span>
                <span className='dot_separator'>&#8226;</span> &nbsp;
                <span>{id.info.publishedAt}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='dots_container'>
          <BiDotsVerticalRounded  size={25} className='dots' />
        </div>
      </Link>
    </div>
  )
}

export default VideoCard