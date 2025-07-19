import React from 'react'

import BowlAndStars from '../images/Logo/BowlAndStars.png'
import Typography from '../Typography'

const Home = () => {
  return (
    <div
      className='flex flex-col items-center justify-center pt-8
    h-screen px-4 text-center'
    >
      <div
        className='flex-shrink-0 max-h-[60vh] w-full 
      flex justify-center items-center'
      >
        <img
          src={BowlAndStars}
          alt='Bowl and Stars'
          className='object-contain max-h-full max-w-[80%]'
        />
      </div>

      <div
        className='mt-4 flex flex-col items-center 
      flex-shrink-0 max-h-[30vh] justify-center'
      >
        <Typography
          variant='logo'
          className='font-PlaypenSans text-text leading-tight text-3xl'
        >
          Gleeful
        </Typography>
        <Typography
          variant='logo'
          className='font-PlaypenSans text-text leading-tight text-3xl'
        >
          Clay
        </Typography>
      </div>
    </div>
  )
}

export default Home
