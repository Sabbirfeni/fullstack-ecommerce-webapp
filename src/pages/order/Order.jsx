import React, { useContext, useEffect } from 'react'
import MyContext from '../../context/data/myContext'
import Loader from '../../components/loader/Loader';
import { product1 } from '../../assets/images';
import { Link } from 'react-router-dom';
function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid;
  const context = useContext(MyContext);
  const { mode, loading, orders } = context;
  // debugger

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({top: 0, left: 0});
  }, []);
  
  if(loading) {
    return <Loader/>
  }

  if(orders.length > 0) {
    return (

          <div className='cart-item-container w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-3'>
            {orders.filter(obj => obj.userid == userid).map((order, index) => {
              console.log(orders)
              const { orderId, title, description, price, imageUrl, orderStatus } = order
                     
              return ( 
                <div key={index}>
                  <Link to={`/productinfo/${orderId}`} key={`${index}`} className='cart-item h-24 md:h-32 bg-[#fff] flex rounded-md overflow-hidden'>
                      <img src={imageUrl} alt="product-image" className="w-24 md:w-32 h-full object-cover" />
                      <div className="flex flex-1 w-full h-full px-3 py-3 md:py-4">
                        <div className="relative w-full">
                          <h2 className="text-md font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h2>
                          <h2 className="text-xs md:text-sm" style={{ color: mode === 'dark' ? 'white' : '' }}>{description.length > 50 ? description.slice(0, 50) : description}</h2>
                          <div className='flex items-center justify-between absolute bottom-0 w-full mt-3'>
                            <h2 className="text-xs md:text-md font-bold">$ {price}</h2>
                            <h2 className={`text-xs text-orange-500 ${orderStatus == 'delivering' && 'text-[#42ca30]'}`}>{orderStatus}</h2>
                          </div>
                        </div>
                      </div>
                  </Link>
                </div>
              )
            })} 
          </div>
    )
  } else {
    return (
      <h2 className=' text-center tex-2xl text-white'>No order found</h2>
    )
  }
}

export default Order


{/* {
              orders.filter(obj => obj.userid == userid).map((order, index) => {
                // order.cartItems.map()
                return (
                  <div key={index} className="">
                    {
                      order.orderItem.map((item, index) => {
                        return (
                          <div key={index} className="rounded-lg md:w-2/3">
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                              <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                  <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                                  <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
                                  <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.price}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            } */}