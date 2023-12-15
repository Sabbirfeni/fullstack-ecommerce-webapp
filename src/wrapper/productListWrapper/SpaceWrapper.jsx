import React from 'react'

function SpaceWrapper({ children }) {
    return (
      <div className='mt-4 md:mt-6'>
          { children }
      </div>
    )
  }

export default SpaceWrapper