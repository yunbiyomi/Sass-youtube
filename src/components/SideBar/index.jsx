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
      : setIsToggled(true)
  }, [width])

  return (
    <>
    {
      width < 792 ? (
          isToggled
            ? <BigSideBar />
            : null
        ) : (
          isToggled 
            ? <BigSideBar />
            : <SmallSideBar />
        )
    }
    </>
  )
}

export default SideBar