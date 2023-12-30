import React, { useContext, useEffect } from 'react'
import Filter from '../../components/filter/Filter'

import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'
import ProductList from '../../components/productCard/ProductList'
import SpaceWrapper from '../../wrapper/productListWrapper/SpaceWrapper'

function AllProducts() {
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

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({top: 0, left: 0});
  }, []);
  return (
    <div>
        <ProductList limit={product.length}/>
    </div>
  )
}

export default AllProducts