import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {

    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

    
  return (
    <>
        <div className='lg:flex hidden flex-col w-[240px] py-5 px-4 bg-slate-200 h-screen rounded-md'>
            <div className='flex flex-col'>
                <h4 className='text-xl font-medium logo'>Dashboard</h4>
            </div>
            <NavLink to='/dashboard/overview' style={({ isActive }) => (
                isActive ? { background: '#c5c5c5' } : { background: '' }
            )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-2 my-1 rounded-md hover:bg-[#c5c5c5]'>
                All
            </NavLink>
            <NavLink to='/dashboard/all-products' style={({ isActive }) => (
                isActive ? { background: '#c5c5c5' } : { background: '' }
            )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-2 my-1 rounded-md hover:bg-[#c5c5c5]'>
                Total products
            </NavLink>
            <NavLink to='/dashboard/all-orders' style={({ isActive }) => (
                isActive ? { background: '#c5c5c5' } : { background: '' }
            )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-2 my-1 rounded-md hover:bg-[#c5c5c5]'>
                Total orders
            </NavLink>
            <NavLink to='/dashboard/all-users' style={({ isActive }) => (
                isActive ? { background: '#c5c5c5' } : { background: '' }
            )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-2 my-1 rounded-md hover:bg-[#c5c5c5]'>
                Total users
            </NavLink>
        </div>
        
        <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 lg:hidden
            smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
                <NavLink onClick={() => setMobileMenuOpen(false)}/>
                {/* <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
                <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
                <NavLinks handleClick={() => setMobileMenuOpen(false)}/> */}
        </div>
    </>
    
  )
}

export default Sidebar