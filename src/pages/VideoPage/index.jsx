import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import YouTube from 'react-youtube';
import { SideBarContext } from '../../context/SideBarContext'
import { BiLike,  BiDislike } from 'react-icons/bi'
import { RiShareForwardLine, RiFlagLine } from 'react-icons/ri'
import { MdPlaylistAdd } from 'react-icons/md'
import dayjs from 'dayjs';
import formatNumber from '../../helpers/formatNumber';

const VideoPage = () => {  
  const { videoId } = useParams();
  let location = useLocation();
  const { state: currentVideo } = location;
  const { setIsToggled } = useContext(SideBarContext);
  const views = formatNumber(currentVideo.extraInfo.viewCount);
  const comments = formatNumber(currentVideo.extraInfo.commentCount);

  const onPlayerReady = (e) => {
    e.target.playVideo();
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    setIsToggled(false);
  }, [])

  const videoHeaderMarkUp = (
    <div className='video_main_info'>
      <div className="tags">
        {
          currentVideo?.snippet?.tags.map((tag, i) => (
            <p className='tag' key={i}>#{tag}</p>
          ))
        }
      </div>
      <h1>{currentVideo.snippet.title}</h1>
      <div className="videoplayer_metadata">
        <span>
          조회수 {views}회
        </span>
        <span className='dot_separator'> &#8226; </span>
        <span>
          {dayjs(currentVideo.snippet.publishedAt).format('MMM D, YYYY')}
        </span>
      </div>
    </div>
  )

  return (
    <section className='videoPage'>
      <div className='columns_container'>
        <div className='column column_1'>
          <div className='youtube_player_container'>
            <YouTube className='youtube-player' videoId={videoId} onPlay={onPlayerReady} opts={opts}/>
          </div>
          <div className='videoplayer_info'>
            {videoHeaderMarkUp}
            <div className='main_header_buttons'>
              <div className='likes_container'>
                <div className='likes'>
                  <BiLike size={25} />
                  <span>좋아요</span>
                </div>
                <div className='dislikes'>
                  <BiDislike size={25} />
                  <span>싫어요</span>
                </div>
                <div className='share'>
                  <RiShareForwardLine size={25} />
                  <span>공유</span>
                </div>
                <div className='save'>
                  <MdPlaylistAdd size={25} />
                  <span>오프라인 저장</span>
                </div>
                <div className='report'>
                  <RiFlagLine size={25} />
                </div>
              </div>
            </div>
          </div>
          <div className='channel_video_info'>
            <div className="channel_data">
              <div className="channel_avatar">
                <img src={currentVideo.channelInfo.thumbnails.default.url} alt="avatar" />
              </div>
              <div className="channel_title">
                <a href="/">
                  {currentVideo.channelInfo.title}
                </a>
                <span>
                  구독자 {currentVideo.channelInfo.subscriberCount}명
                </span>
              </div>
              <div className="channel_subscribe">
                <button>
                  구독
                </button>
              </div>
            </div>
            <div className="video_description">
              {currentVideo.snippet.description}
            </div>
          </div>
          <div className="video_comments_container">
            <div className="video_comments_count">
              댓글 {comments} 개
            </div>
            <div className="video_comments">

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoPage