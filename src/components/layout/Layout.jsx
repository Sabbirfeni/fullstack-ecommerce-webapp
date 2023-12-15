import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import BottomBar from '../bottomBar/BottomBar'

function Layout() {
  return (
    <div>
      <Navbar/>
      <div className='container mx-auto sm:px-5 px-2 md:pt-[80px] pt-[70px] md:pb-[60px] pb-[40px]'>
          {<Outlet/>}
      </div>
      <BottomBar/>
      <Footer/>
    </div>
  )
}

export default Layout