import React from 'react'

import BowlAndStars from '../images/Logo/BowlAndStars.png'
import Typography from '../Typography'

const Home = () => {
  return (
    <div
      className='flex flex-col items-center
     justify-center h-[calc(100vh-4rem)] px-4 text-center overflow-hidden'
    >
      <img
        src={BowlAndStars}
        alt='Bowl and Stars'
        className='w-auto object-contain max-h-[calc(100vh-14rem)]'
      />

      <div className='mt-4 flex flex-col items-center'>
        <Typography
          variant='logo'
          className='font-PlaypenSans text-text'
        >
          Gleeful
        </Typography>
        <Typography
          variant='logo'
          className='font-PlaypenSans text-text'
        >
          Clay
        </Typography>
      </div>
    </div>
  )
}

export default Home
