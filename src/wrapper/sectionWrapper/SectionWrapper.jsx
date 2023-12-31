import React from 'react'
import { Link } from 'react-router-dom'
import { animate, motion } from "framer-motion"

function SectionWrapper({ children, sectionTitle, allProductUrl }) {
  return (
    <div>
        <div className='flex items-center justify-between mb-3 md:mb-5'>
            <h1 className='text-md md:text-xl' onClick={() => animate('.box', { rotate: -64 })}>{sectionTitle}</h1>
            <Link to={`${allProductUrl}`} className='text-xs md:text-sm hover:underline'>See all</Link>
        </div>
        { children }
    </div>
  )
}

export default SectionWrapper