import { useContext, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { cart, logo } from '../../assets/images'
import { useSelector } from 'react-redux'
import './navbar.css'
import { Avatar } from '@mui/material'
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [ profileMenuOpen, setProfileMenuOpen ] = useState(false)

  const context = useContext(myContext)
  const { toggleMode, mode, mobileMenuOpen, setMobileMenuOpen } = context
  const user = JSON.parse(localStorage.getItem('user'));
  const cartItems = useSelector(state => state.cart)
  const navigate = useNavigate()
  const isAdmin = user?.user?.email === 'sabbirholybangla@gmail.com';
  const location = useLocation()
  const isDashboard = location.pathname.includes('/dashboard')
  const showBar = isAdmin && isDashboard;

  const logout = () => {
    if(!confirm('Are you sure!')) return 
    localStorage.clear('user');
    navigate('/login')
  }

  const handleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen)
  }
  // px-5 md:px-12 lg:px-24 2xl:px-48
  return (
    <div className='fixed w-full z-50 border-b border-[#ececec] bg-[#f8f8f8]'>
      <div className='flex container mx-auto md:py-2 py-2 sm:px-5 px-4'>
        <div className='navbar-left flex  items-center justify-between md:space-x-6 space-x-3 flex-1 lg:flex-none'>
          {/* logo */}
          <div>
          <Link to='/'>
            <img src={logo} className='lg:w-15 md:w-14 w-12' alt="website logo" />
          </Link>
          </div>

          {/* search bar */}
          <div className='relative'>
            <input className="search-input" name="text" type="text" placeholder="Search product"/>
            <svg className='absolute sm:top-3 top-2.5 right-3 w-4 cursor-pointer' fill="#000000"  viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fillRule="evenodd"></path>
            </svg>
          </div>


          {/* cart */}
          <div className='flex lg:hidden gap-3 md:gap-5'>
            <Link to='/cart' className='relative'>
              {cartItems.length > 0 && <div className='absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center text-xs rounded-full text-white p-2 bg-[#000]'>{cartItems.length}</div>}
              <img src={cart} className='w-5' alt="cart" />
            </Link>
            {
              showBar && (
                <button className='text-xl' onClick={() => setMobileMenuOpen(state => !state)}>
                  {mobileMenuOpen ? <IoClose/> : <HiBars3/> }
                </button>
              )
            }
          </div>
          
        </div>

       

        <div className='navbar-right hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>

          <NavLink to='/' className="text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>
            Home
          </NavLink>

          <NavLink to='/allproducts' className="text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>
            All Products
          </NavLink>

          {/* cart */}
          <div className='hidden lg:block'>
            <Link to='/cart' className='relative'>
              {cartItems.length > 0 && <div className='absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center text-xs rounded-full text-white p-2 bg-[#000]'>{cartItems.length}</div>}
              <img src={cart} className='w-5' alt="cart" />
            </Link>
          </div>

          

          {
            !user && (
              <NavLink to='login' className="text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>
                Login
              </NavLink>
            )
          }

          {
            !user && (
              <NavLink to='signup' className="text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>
                Create account
              </NavLink>
            )
          }
      
          {/* notification icon */}

          {/* profile icon */}
          { user && (
          <div className='cursor-pointer relative'>
            <Avatar onClick={handleProfileMenu} style={{ width: 32, height: 32 }} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbG-0Pc_dX0swJiOnUTf58QaSAwwUTpBUi6Q&usqp=CAU" />
              
              <div className={`menu-container absolute -left-20 z-50 ${profileMenuOpen ? 'flex' : 'hidden'} py-1.5 flex-col transition text-sm w-[120px] bg-[#ffffff] rounded-md shadow-xl`}>

                {/* dashboard item will show if user is admin */}
                {isAdmin && (
                  <Link to='/dashboard/overview' onClick={handleProfileMenu} className='hover:bg-gray-200 py-1.5 px-3'>Dashboard</Link>
                )}
                
                
                <Link to='/order' onClick={handleProfileMenu} className='hover:bg-gray-200 py-1.5 px-3'>My orders</Link>

                {/* Logout item */}
                
                  <Link 
                    onClick={() => {
                      handleProfileMenu();
                      logout()
                    }} 
                    className='hover:bg-gray-200 py-1.5 px-3'
                  >
                      Logout
                  </Link>
              
              </div>
            
          </div>
          )}

          {/* mode icon */}
        </div>

        {/* Wrapper for profile menu item when active it will show up and when click anywhere of this div profile menu will be hidden */}
        {profileMenuOpen && <div onClick={handleProfileMenu} className='w-[100%] h-screen absolute top-0 bottom-0 right-0 z-40 bg-[#00000000]'></div>}
      </div>
    </div>
  )
}

