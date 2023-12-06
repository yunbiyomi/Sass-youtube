import axios from '../../api/axios'
import React, { useCallback, useEffect, useState } from 'react'
import { getVideoInfo } from '../../helpers/fetchingData';

const MainPage = () => {
  const storedVideos = JSON.parse(localStorage.getItem('mainVideos'));
  const [mainVideos, setMainVideos] = useState(storedVideos || []);

  const getMainVideos = useCallback(async() => {
    try {
      if(!storedVideos) {
        const response = await axios.get(`/search?part=snippet&maxResults=10&q=playlist`);
        let videosArray = await response.data.items;
        videosArray = await getVideoInfo(videosArray);
        setMainVideos(videosArray);

        localStorage.setItem('mainVideos', JSON.stringify(videosArray));
      }
    } catch (error) {
      console.log(error);
    }
  }, [storedVideos])

  useEffect(() => {
    getMainVideos();
  }, [getMainVideos])

  return (
    <div>MainPage</div>
  )
}

export default MainPage