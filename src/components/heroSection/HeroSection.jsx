import React from 'react'
import { heroVideo } from '../../assets/videos'
import { leftBottomLeft, leftBottomMiddle, leftBottomRight } from '../../assets/images'

function HeroSection() {
  return (
    <div>
      <div className='min-h-[60vh] flex lg:flex-row flex-col gap-2 overflow-hidden'>
        <div className='left-hero lg:w-2/3 w-full flex flex-col gap-2 overflow-hidden'>
          <div className='left-top bg-slate-300 lg:h-2/3 h-[30vh] relative w-full overflow-hidden shadow-lg rounded-md'>
              <video className='w-full h-full mt-5 absolute scale-150 lg:scale-125 xl:scale-150' autoPlay muted loop={true}>
                <source src={`${heroVideo}#t=3,36`} type="video/mp4"/>
              </video>
              {/* <img src={leftBottomRight} className='w-full h-[100%] absolute object-cover' alt="" /> */}
          </div>
          <div className='lg:h-1/3 md:h-[20vh] h-[40vh]'>
            <div className='left-bottom flex md:flex-row flex-col gap-2 h-full w-full'>
              <div className='flex gap-2 md:w-2/3 w-full md:h-full h-1/2'>
                <div className='bg-slate-300 flex-1 flex items-center justify-center overflow-hidden shadow-lg rounded-md'>
                  <img src={leftBottomLeft} className='w-full h-[fit-content]' alt="" />
                </div>
                <div className='bg-slate-300 flex-1 flex items-center justify-center overflow-hidden shadow-lg rounded-md'>
                  <img src={leftBottomMiddle} className='w-full h-[fit-content]' alt="" />
                </div>
              </div>
              <div className='bg-slate-300 flex-1 flex items-center justify-center overflow-hidden shadow-lg rounded-md'>
                <img src={leftBottomRight} className='w-full h-[fit-content]' alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='lg:h-[65vh] h-[25vh] lg:w-1/3 w-full'>
          <div className='right-hero flex lg:flex-col flex-row gap-2 h-full w-full'>
              <div className='bg-slate-300 flex-1 lg:h-[30vh] h-full flex items-center justify-center overflow-hidden shadow-lg rounded-md'>
                <img src={leftBottomMiddle} className='w-full h-[fit-content]' alt="" />
              </div>
              <div className='bg-slate-300 flex-1 lg:h-[30vh] h-full flex items-center justify-center overflow-hidden shadow-lg rounded-md'>
                <img src={leftBottomLeft} className='w-full h-[fit-content]' alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection