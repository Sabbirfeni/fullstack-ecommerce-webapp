import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
import MyContext from '../../context/data/myContext';

function Sidebar() {

    const context = useContext(MyContext);
    const { mobileMenuOpen, setMobileMenuOpen } = context;

    
  return (
    <div className='sidebar bg-[#fff] rounded-md'>
        <div className='lg:flex hidden flex-col w-[240px] py-5 px-4 h-screen '>
            <div className='flex flex-col mb-4'>
                <h4 className='text-xl font-medium logo'>Dashboard</h4>
            </div>
            <NavLink to='/dashboard/overview' style={({ isActive }) => (
                isActive ? { background: '#000', color: '#fff' } : { background: '', color: '#000' }
            )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-4 my-1 rounded-md hover:bg-[#e0e0e0]'>
                Overview
            </NavLink>
            <NavLink to='/dashboard/all-users' style={({ isActive }) => (
                isActive ? { background: '#000', color: '#fff' } : { background: '', color: '#000' }
            )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-4 my-1 rounded-md hover:bg-[#e0e0e0]'>
                Total users
            </NavLink>
            <NavLink to='/dashboard/all-products' style={({ isActive }) => (
                isActive ? { background: '#000', color: '#fff' } : { background: '', color: '#000' }
            )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-4 my-1 rounded-md hover:bg-[#e0e0e0]'>
                Total products
            </NavLink>
            <NavLink to='/dashboard/all-orders' style={({ isActive }) => (
                isActive ? { background: '#000', color: '#fff' } : { background: '', color: '#000' }
            )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-4 my-1 rounded-md hover:bg-[#e0e0e0]'>
                Total orders
            </NavLink>
            <NavLink to='/dashboard/addproduct' style={({ isActive }) => (
                isActive ? { background: '#000', color: '#fff' } : { background: '', color: '#000' }
            )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-4 my-1 rounded-md hover:bg-[#e0e0e0]'>
                Add product
            </NavLink>

        </div>
        
        <div className={`fixed z-10 top-0 h-screen w-2/3 bg-gradient-to-tl from-[#e9e9e9] to-[#aca5df] backdrop-blur-lg p-6 lg:hidden
            transition duration-200 ${mobileMenuOpen ? 'left-0 opacity-100' : '-left-full opacity-0'}`}>
            <div className='mt-14'>
                <NavLink to='/dashboard/overview' onClick={() => setMobileMenuOpen(false)} style={({ isActive }) => (
                    isActive ? { background: '#000', color: '#fff' } : { background: '', color: '#000' }
                )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-4 my-1 rounded-md hover:bg-[#e0e0e0]'>
                    Overview
                </NavLink>
                <NavLink to='/dashboard/all-users' onClick={() => setMobileMenuOpen(false)} style={({ isActive }) => (
                    isActive ? { background: '#000', color: '#fff' } : { background: '', color: '#000' }
                )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-4 my-1 rounded-md hover:bg-[#e0e0e0]'>
                    Total users
                </NavLink>
                <NavLink to='/dashboard/all-products' onClick={() => setMobileMenuOpen(false)} style={({ isActive }) => (
                    isActive ? { background: '#000', color: '#fff' } : { background: '', color: '#000' }
                )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-4 my-1 rounded-md hover:bg-[#e0e0e0]'>
                    Total products
                </NavLink>
                <NavLink to='/dashboard/all-orders' onClick={() => setMobileMenuOpen(false)} style={({ isActive }) => (
                    isActive ? { background: '#000', color: '#fff' } : { background: '', color: '#000' }
                )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-4 my-1 rounded-md hover:bg-[#e0e0e0]'>
                    Total orders
                </NavLink>
                <NavLink to='/dashboard/addproduct' onClick={() => setMobileMenuOpen(false)} style={({ isActive }) => (
                    isActive ? { background: '#000', color: '#fff' } : { background: '', color: '#000' }
                )} className='flex flex-row justify-start items-center text-sm font-medium py-3 px-4 my-1 rounded-md hover:bg-[#e0e0e0]'>
                    Add product
                </NavLink>
            </div>
            
        </div>
    </div>
    
  )
}

export default Sidebar