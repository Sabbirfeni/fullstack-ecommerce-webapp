import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Navbar/>
        <div className='content'>
            {<Outlet/>}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout