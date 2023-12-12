import React from 'react'

function HeroSection() {
  return (
    <div>
      <div className='min-h-[60vh] flex lg:flex-row flex-col gap-2'>
        <div className='left-hero lg:w-2/3 w-full flex flex-col gap-2'>
          <div className='left-top bg-slate-300 lg:h-2/3 h-[30vh] w-full'>left-top</div>
          <div className='lg:h-1/3 md:h-[20vh] h-[40vh]'>
            <div className='left-bottom flex md:flex-row flex-col gap-2 h-full w-full'>
              <div className='flex gap-2 md:w-2/3 w-full md:h-full h-1/2'>
                <div className='bg-slate-300 flex-1'>left-bottom-left</div>
                <div className='bg-slate-300 flex-1'>left-bottom-middle</div>
              </div>
              <div className='bg-slate-300 flex-1'>left-bottom-right</div>
            </div>
          </div>
        </div>
        <div className='lg:h-[60vh] h-[25vh] lg:w-1/3 w-full'>
          <div className='right-hero flex lg:flex-col flex-row gap-2 h-full w-full'>
              <div className='bg-slate-300 flex-1 lg:h-[30vh] h-full'>right-top</div>
              <div className='bg-slate-300 flex-1 lg:h-[30vh] h-full'>right-bottom</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection