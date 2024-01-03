import React, { useContext, useEffect, useRef } from 'react'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'
import { product1, product2, product3 } from '../../assets/images'
import './productList.css'
import { toast } from 'react-toastify'
import Filter from '../filter/Filter'
import { animate, motion, useAnimate } from "framer-motion"
import Loader from '../loader/Loader'

function ProductList({ limit }) {
    const context = useContext(myContext)
    const { mode, allProducts, searchKey, filterType, filterPrice, loading } = context
    console.log(allProducts)

    let productLimit = limit || allProducts.length
    const cartItem = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const addCart = item => {
        dispatch(addToCart(item))
        toast.success('product added to cart.')
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItem))
    }, [cartItem])

    if(loading) {
        return <Loader/>
    }


    return (
        <div>
            <Filter/>

            <div className='product-list grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-cols-2 gap-2 md:gap-3'>
            
            {allProducts.filter(item => item.title.toLowerCase().includes(searchKey.toLowerCase()))
                    .filter(item => item.catergory.toLowerCase().includes(filterType.toLowerCase()))
                    .filter(item => Number(item.price) <= Number(filterPrice) || Number(filterPrice) == 0)
                    .slice(0, productLimit)
                    .map((item, index, arr) => {
                        const { productId, title, price, description, imageUrl } = item;
                        
                        return (
                            <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            
                            key={productId} className='bg-[#fff] rounded-md product-card-container'>
                                <Link to={`/productinfo/${productId}`}>
                                    <div className='h-44 lg:h-52 2xl:h-52 overflow-hidden'>
                                        <img src={`${imageUrl}`} alt="product-image" className='product-img w-full h-full object-cover rounded-t-md' />
                                    </div>
                                
                                    <div className='p-2 md:p-3 lg:p-3 xl:p-4'>
                                        <h3 className='text-xs sm:text-sm md:text-md font-bold md:mb-2'>{title}</h3>
                                        <p className='product-description hidden md:block text-xs'>{description.length > 40 ? description.slice(0, 40) + '...' : description}</p>
                                        <p className='product-description block md:hidden sm:text-xs'>{description.length > 25 ? description.slice(0, 25) + '...' : description}</p>
                                    </div>
                                </Link>
                                <div className='flex items-center justify-between pr-2 md:pr-3 xl:pr-4 pl-2 md:pl-3 xl:pl-4 pb-2 md:pb-3 xl:pb-4 pt-0'>
                                    <h4 className='text-sm sm:text-md lg:text-lg font-bold'>$ {price}</h4>
                                    <button onClick={() => addCart(item)} className='addto-card-btn bg-[#e2e8f0] hover:bg-[#000] transition hover:text-[#fff] px-2 py-1 text-xs rounded-sm z-40'>Add to cart</button>
                                </div>
                            </motion.div>
                        )
                    })}
                
               
            </div>
            {/* Product card */}

        </div>
    )
}

export default ProductList