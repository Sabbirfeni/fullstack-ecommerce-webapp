import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import BottomBar from '../bottomBar/BottomBar'
import MyState from '../../context/data/myState'

function Layout() {
  return (
    <MyState>
        <Navbar/>
        <div className='container min-h-screen mx-auto sm:px-5 px-2 md:pt-[80px] pt-[70px] md:pb-[30px] pb-[10px]'>
            {<Outlet/>}
        </div>
        <BottomBar/>
        <Footer/>
    </MyState>
   
  )
}

export default Layout