import React, { useContext, useEffect } from 'react'
import useWindowSize from '../../helpers/useWindowSize'
import BigSideBar from './BigSideBar';
import SmallSideBar from './SmallSideBar';
import { SideBarContext } from '../../context/SideBarContext';

const SideBar = () => {
  const { width } = useWindowSize();
  const { isToggled, setIsToggled } = useContext(SideBarContext);

  useEffect(() => {
    width <= 1300 
      ? setIsToggled(false)
      : location.pathname.startsWith('/video')
        ? setIsToggled(false)
        : setIsToggled(true)
  }, [width, location.pathname, setIsToggled])

  return (
    <>
    {
      location.pathname.startsWith('/video')
      ? ( isToggled
          ? <BigSideBar />
          : null
        )
      : width < 792 
        ? ( isToggled
              ? <BigSideBar />
              : null
          ) 
        : ( isToggled 
              ? <BigSideBar />
              : <SmallSideBar />
          )
    }
    </>
  )
}

export default SideBar