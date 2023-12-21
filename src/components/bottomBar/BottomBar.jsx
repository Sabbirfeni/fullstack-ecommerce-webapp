import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BiHome } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Avatar } from '@mui/material'
import './BottomBar.css'
function BottomBar() {
    const user = JSON.parse(localStorage.getItem('user'));
    const isAdmin = user?.user?.email === 'sabbirholybangla@gmail.com';
    const [ profileMenuOpen, setProfileMenuOpen ] = useState(false)
    const handleProfileMenu = () => {
        setProfileMenuOpen(!profileMenuOpen)
    }

    const navigate = useNavigate()
    const logout = () => {
        if(!confirm('Are you sure!')) return 
        localStorage.clear('user');
        navigate('/login')
    }

  return (
    <div className='bottom-bar py-2 md:py-3 flex lg:hidden fixed items-center justify-around text-xs md:text-sm bottom-0 w-full bg-[#fff] z-50'>
        <NavLink to='/' className='flex flex-col items-center w-full md:border-r border-black hover:text-[#1ea5ff]'>
            <BiHome style={{ width: 21, height: 21 }} className=''/>
            <div>Home</div>
        </NavLink>
        <NavLink to='/allproducts' className='flex flex-col items-center w-full md:border-r border-black hover:text-[#1ea5ff]'>
            <MdOutlineAddShoppingCart style={{ width: 21, height: 21 }}/>
            <div className=''>Products</div>
        </NavLink>
        {user && (
            <NavLink to='/order' className='flex flex-col items-center w-full md:border-r border-black hover:text-[#1ea5ff]'>
                <TbTruckDelivery style={{ width: 21, height: 21 }}/>
                <div>Orders</div>
            </NavLink>
        )}
        
        <div className='flex flex-col items-center w-full'>
            <div className='cursor-pointer relative'>
                <div onClick={handleProfileMenu} className='flex flex-col items-center'>
                    {
                        user ? 
                        <Avatar  style={{ width: 21, height: 21 }} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbG-0Pc_dX0swJiOnUTf58QaSAwwUTpBUi6Q&usqp=CAU" /> 
                        : <MdOutlineAccountCircle className='text-lg md:text-2xl'/>
                    }
                    <div>Account</div>
                </div>

                {/* Profile menu items */}
                <div className={`menu-container absolute ${isAdmin ? '-top-36' : user ? '-top-28' : '-top-20'}  right-1 z-50 ${profileMenuOpen ? 'flex' : 'hidden'} flex-col transition text-sm w-[120px] bg-[#ffffff] rounded-md shadow-xl`}>
                    
                    {!user && <Link to='/signup' onClick={handleProfileMenu} className='hover:bg-gray-200 pt-3 py-1.5 px-3 rounded-t-md'>Signup</Link>}
                    {!user && <Link to='/login' onClick={handleProfileMenu} className='hover:bg-gray-200 pb-3 py-1.5 px-3 rounded-t-md'>Login</Link>}


                    {/* dashboard item will show if user is admin */}
                    {isAdmin && (
                        <Link to='/dashboard/overview' onClick={handleProfileMenu} className='hover:bg-gray-200 py-1.5 px-3 rounded-t-md'>Dashboard</Link>
                    )}
                    
                    
                    {user && <Link to='/order' onClick={handleProfileMenu} className='hover:bg-gray-200 py-1.5 px-3'>My orders</Link>}

                    {/* Logout item */}
                    {user && (
                        <Link 
                            onClick={() => {
                                handleProfileMenu();
                                logout()
                            }} 
                            className='hover:bg-gray-200 pb-3 py-1.5 px-3 rounded-b-md'
                        >
                            Logout
                        </Link>
                    )}

                    
                </div>
            </div>

            
        </div>

        {/* Wrapper for profile menu item when active it will show up and when click anywhere of this div profile menu will be hidden */}
        {profileMenuOpen && <div onClick={handleProfileMenu} className='w-[100%] h-screen absolute bottom-0 right-0 z-40 bg-[#0000]'></div>}
    </div>
  )
}

export default BottomBar