import React from 'react'

const ImageTest = () => {
  const images = [
    '/images/Dragon.jpg',
    '/images/House.jpg',
    '/images/Shark.png',
    '/images/Snail.jpg',
  ]

  return (
    <div className='grid grid-cols-2 gap-4 p-4 bg-gray-800 text-white'>
      {images.map((src) => {
        return (
          <div className='border border-white p-2'>
            <img
              src={src}
              alt='Test'
              className='w-full h-auto'
            />
            <p className='mt-2 text-center'>{src}</p>
          </div>
        )
      })}
    </div>
  )
}
export default ImageTest
