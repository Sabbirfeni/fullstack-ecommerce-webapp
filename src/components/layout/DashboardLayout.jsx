import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='flex lg:gap-0 xl:gap-5 gap-0'>
        <Sidebar/>
        <div className='flex-1 flex flex-col'>
            {<Outlet/>}
        </div>
        
    </div>
  )
}

export default DashboardLayout