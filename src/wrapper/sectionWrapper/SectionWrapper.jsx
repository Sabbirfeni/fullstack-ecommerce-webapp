import React from 'react'
import { Link } from 'react-router-dom'

function SectionWrapper({ children, sectionTitle, allProductUrl }) {
  return (
    <div>
        <div className='flex items-center justify-between mb-3 md:mb-5'>
            <h1 className='text-md md:text-xl'>{sectionTitle}</h1>
            <Link to={`${allProductUrl}`} className='text-xs md:text-sm hover:underline'>See all</Link>
        </div>
        { children }
    </div>
  )
}

export default SectionWrapper