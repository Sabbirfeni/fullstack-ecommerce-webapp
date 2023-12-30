import React, { useEffect } from 'react'
import ProductReviewList from '../../components/product-review/ProductReviewList'

function AllReviews() {
    useEffect(() => {
        // scroll to top on page load
        window.scrollTo({top: 0, left: 0});
    }, []);
  return (
    <div>
        <ProductReviewList/>
        <ProductReviewList/>
        <ProductReviewList/>
        <ProductReviewList/>
        <ProductReviewList/>
        <ProductReviewList/>
        <ProductReviewList/>
        <ProductReviewList/>
    </div>
  )
}

export default AllReviews