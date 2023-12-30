import React from 'react'

function SpaceWrapper({ children }) {
    return (
      <div className='mt-4 md:mt-10'>
          { children }
      </div>
    )
  }

export default SpaceWrapper