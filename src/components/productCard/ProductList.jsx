import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'
import { product1, product2 } from '../../assets/images'
import './productCard.css'

function ProductList() {
    const context = useContext(myContext)
    const { mode, product, searchKey, filterType, filterPrice, } = context
 
    const cartItem = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const addCart = item => {
        dispatch(addToCart(item))
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItem))
    }, [cartItem])
    return (

        <div>
            <div className='product-list grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-3 gap-4'>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-card-container cursor-pointer rounded-sm shadow-xl h-[490px]'>
                    <div className='product-img-container h-2/3'>
                        <img src={product1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-1/3 p-5'>
                        <div className='h-full relative'>
                            <div className='1'>
                                <h3 className='text-xl font-bold mb-2'>Title</h3>
                                <p className='text-sm'>{'details details details details details details details details details details details details details details details details details details details details'.length > 40 ? `details details details details details details details details details details details details details details details details details details details details`.slice(0, 40) + '...' : 'details details details details details details details details'}</p>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-xl font-bold'>$399</h4>
                                    <button className='addto-card-btn px-3 py-2 text-xs rounded-sm'>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                
            </div>
            {/* Product card */}

        </div>
        // <section className="text-gray-600 body-font">
        //     <div className="container px-5 py-8 md:py-16 mx-auto">
        //         <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
        //             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
        //             <div className="h-1 w-20 bg-pink-600 rounded"></div>
        //         </div>

        //         <div className="flex flex-wrap -m-4">
        //             {product.filter(item => item.title.toLowerCase().includes(searchKey.toLowerCase()))
        //             .filter(item => item.catergory.toLowerCase().includes(filterType.toLowerCase()))
        //             .filter(item => Number(item.price) <= Number(filterPrice) || Number(filterPrice) == 0)
        //             .slice(0, 8)
        //             .map((item, index) => {
        //                 const { id, title, price, description, imageUrl } = item;
        //                 return (
        //                     <Link key={`${imageUrl}`} to={`/productinfo/${id}`} className="p-4 md:w-1/4  drop-shadow-lg">
        //                         <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
        //                             <div className="flex justify-center cursor-pointer" >
        //                                 <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={`${imageUrl}`} alt="blog" />
        //                             </div>
        //                             <div className="p-5 border-t-2">
        //                                 <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>E-Bharat</h2>
        //                                 <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>
        //                                 {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
        //                                 <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>$ {price}</p>
        //                                 <div className=" flex justify-center">
        //                                     <button onClick={() => addCart(item)} type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </Link>
        //                 )
        //             })}

        //         </div>
        //         <div className='text-center mt-4'>
        //             <Link to='/allproducts' className= 'bg-gray-300 px-4 py-2'>
        //                 More product
        //             </Link>
        //         </div>


        //     </div>
        // </section >

    )
}

export default ProductList