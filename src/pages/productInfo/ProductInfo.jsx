import React, { useContext, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import { useParams } from 'react-router-dom'
import MyContext from '../../context/data/myContext'
import Loader from '../../components/loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'
import ProductReviewList from '../../components/product-review/ProductReviewList'

function ProductInfo() {
    const { id } = useParams()
    const { allProducts, loading } = useContext(MyContext)
    const productDetails = allProducts.filter(item => item.productId == id)

    const cartItem = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const addCart = item => {
        dispatch(addToCart(item))
        toast.success('Added to cart', { position: "top-center" })    
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItem))
    }, [cartItem])

    useEffect(() => {
        // scroll to top on page load
        window.scrollTo({top: 0, left: 0});
      }, []);

    if(loading) {
        return <Loader/>
    }
    if(allProducts.length > 0) {
        return (
            <div className='min-h-[70vh]'>
                <div className='product-details-container lg:w-4/5 flex items-start justify-center flex-wrap'>
                    <div className='product-image lg:w-1/2 w-full lg:h-auto h-80'> 
                        <img
                            alt="ecommerce"
                            className="w-full h-full object-cover object-center rounded"
                            src={productDetails[0]?.imageUrl}
                        />
                    </div>
                    <div className='product-details lg:w-1/2 w-full lg:pl-10 lg:py-6 px-3 md:px-0 mt-3 lg:mt-0'>
                        <h1 className="text-gray-900 text-xl lg:text-2xl title-font font-medium mb-1">
                            {productDetails[0]?.title}
                        </h1>
                        <div className="flex my-lg-4 my-2">
                            <span className="flex items-center">
                                <svg
                                    fill="#000"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg
                                    fill="#000"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg
                                    fill="#000"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg
                                    fill="#000"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg
                                    fill="none"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="text-sm ml-3">4 Reviews</span>
                            </span>
                        </div>
                        <p className="leading-relaxed text-sm border-b-2 border-[#f1f1f1] mb-4 pb-4 pb-md-5">
                            {productDetails[0]?.description}
                        </p>
                    
                        <div className="flex justify-between items-center">
                            <span className="title-font font-bold text-2xl">
                                ${productDetails[0]?.price}
                            </span>
                            <button onClick={() => addCart(productDetails[0])} className="px-4 py-3 text-sm text-[#fff] hover:text-[#000] bg-[#000] transition hover:bg-[#e2e8f0]  rounded-sm z-50">
                                Add To Cart
                            </button>
                        </div>
                    
                    </div>
                </div>
                <ProductReviewList productId={id}/>
            </div>

            // <section className="text-[#000] body-font overflow-hidden">
            //     <div className="">
            //         <div className="lg:w-4/5 mx-auto flex flex-wrap">
            //             <img
            //                 alt="ecommerce"
            //                 className="lg:w-1/2 w-full lg:h-auto sm:h-80 h-64 object-cover object-center rounded"
            //                 src={productDetails[0]?.imageUrl}
            //             />
            //            
            //         </div>
            //     </div>
            // </section>
        )
    }

}

export default ProductInfo