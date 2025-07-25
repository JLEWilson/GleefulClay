import React from 'react'

import BowlAndStars from '../images/BowlAndStars.webp'
import BackgroundSlideshow from '../components/backgroundSlideshow'
import { SLIDESHOW_PHOTOS } from '../consts/photoGroups'

const Home = () => {
  return (
    <div className='flex h-screen flex-col'>
      <div className='flex flex-col p-6 '>
        <div
          className='flex flex-col md:flex-row items-center
        md:items-start gap-4'
        >
          {/* Logo */}
          <div className='h-[80px] w-auto'>
            <img
              src={BowlAndStars}
              alt='Bowl and Stars'
              className='object-contain h-full'
            />
          </div>

          {/* Text */}
          <div className='text-center'>
            <p className='font-PlaypenSans text-blue-800 text-3xl'>Gleeful</p>
            <p className='font-PlaypenSans text-blue-800 text-3xl'>Clay</p>
          </div>
        </div>
      </div>

      <div className='flex-1 flex justify-center md:px-4'>
        <div className='w-full max-w-5xl'>
          <BackgroundSlideshow images={SLIDESHOW_PHOTOS} />
        </div>
      </div>
    </div>
  )
}

export default Home
