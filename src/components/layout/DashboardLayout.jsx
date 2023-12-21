import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='flex lg:gap-3 gap-0 '>
        <Sidebar/>
        <div className='flex-1 flex flex-col overflow-x-auto'>
            {<Outlet/>}
        </div>
        
    </div>
  )
}

export default DashboardLayout