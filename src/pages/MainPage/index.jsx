import axios from '../../api/axios'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { getVideoInfo } from '../../helpers/fetchingData';
import VideoCard from '../../components/VideoCard';
import { SideBarContext } from '../../context/SideBarContext';

const MainPage = () => {
  let storedVideos;
  const [mainVideos, setMainVideos] = useState(storedVideos || []);
  const { setIsToggled } = useContext(SideBarContext);

  const getMainVideos = useCallback(async() => {
    try {
      if(!storedVideos) {
        const response = await axios.get(`/search?part=snippet&maxResults=10&q=playlist`);
        let videosArray = await response.data.items;
        videosArray = await getVideoInfo(videosArray);
        setMainVideos(videosArray);
        localStorage.setItem('mainVideos', JSON.stringify(videosArray));
        storedVideos = JSON.parse(localStorage.getItem('mainVideos'));
      }
    } catch (error) {
      console.log(error);
    }
  }, [storedVideos])

  useEffect(() => {
    getMainVideos();
  }, [getMainVideos])

  useEffect(() => {
    setIsToggled(true);
  }, [])

  return (
    <section className='mainGallery'>
      {
        mainVideos.map(video => (
          <VideoCard
            key={video.id.videoId}
            id={video.id.videoId}
            video={video}
            img={video.snippet.thumbnails.medium.url}
            info={video.snippet}
            eInfo={video.extraInfo}
            channelInfo={video.channelInfo}
          />
        ))
      }
    </section>
  )
}

export default MainPage