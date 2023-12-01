import React, { useContext } from 'react'
import MyContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'

function Home() {


  return (
    <div>
      <HeroSection/>
      <Filter/>
    </div>
  )
}

export default Home