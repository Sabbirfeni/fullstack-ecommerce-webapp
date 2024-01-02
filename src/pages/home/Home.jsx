import React, { useContext, useEffect } from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import ProductList from '../../components/productCard/ProductList'
import SpaceWrapper from '../../wrapper/productListWrapper/SpaceWrapper'
import ProductReviewList from '../../components/product-review/ProductReviewList'
import SectionWrapper from '../../wrapper/sectionWrapper/SectionWrapper'

function Home() {

  return (
    <div className='flex flex-col gap-5 md:gap-8'>
      <HeroSection/>
      <SectionWrapper sectionTitle='All product' allProductUrl='/allproducts'>
        <ProductList limit={16}/>
      </SectionWrapper>
      <SectionWrapper sectionTitle='Cutomer reviews' allProductUrl='/reviews'>
        <ProductReviewList limit={8}/>
      </SectionWrapper>

      {/* <Track/> */}
      {/* <Testimonial/> */}
    </div>
  )
}

export default Home