import React from 'react'
import NavigationBar from './components/NavigationBar'
import SideBar from './components/SideBar'
import { Outlet, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SearchedVideosPage from './pages/SearchedVideosPage'
import VideoPage from './pages/VideoPage'

const Layout = () => {
  return(
    <>
      <NavigationBar />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path='/results/:input' element={<SearchedVideosPage />}></Route>
          <Route path='/video/:videoId' element={<VideoPage />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
