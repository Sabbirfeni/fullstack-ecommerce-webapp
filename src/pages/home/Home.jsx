import React, { useContext, useEffect } from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import ProductList from '../../components/productCard/ProductList'
import SpaceWrapper from '../../wrapper/productListWrapper/SpaceWrapper'
import ProductReviewList from '../../components/product-review/ProductReviewList'

function Home() {

  return (
    <div>
      <HeroSection/>
      <SpaceWrapper>
        <Filter/>
      </SpaceWrapper>
      <SpaceWrapper>
        <ProductList limit={16}/>
      </SpaceWrapper>
      <SpaceWrapper>
        <ProductReviewList/>
      </SpaceWrapper>

      {/* <Track/> */}
      {/* <Testimonial/> */}
    </div>
  )
}

export default Home