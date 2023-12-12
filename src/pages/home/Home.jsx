import React, { useContext, useEffect } from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import ProductList from '../../components/productCard/ProductList'

function Home() {

  return (
    <div>
      <HeroSection/>
      <Filter/>
      <ProductList/>
      <Track/>
      <Testimonial/>
    </div>
  )
}

export default Home