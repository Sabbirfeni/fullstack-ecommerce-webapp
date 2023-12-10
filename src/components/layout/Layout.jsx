import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import BottomBar from '../bottomBar/BottomBar'

function Layout() {
  return (
    <div>
        <Navbar/>
        <div className='content'>
            {<Outlet/>}
        </div>
        <BottomBar/>
        <Footer/>
    </div>
  )
}

export default Layout