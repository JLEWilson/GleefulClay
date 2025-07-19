import React from 'react'
import COLLECTIONS from '../consts/photoGroups'

const Gallery = () => {
  return (
    <div className='px-4'>
      {Object.entries(COLLECTIONS).map(
        ([collection, images]: [string, string[]]) => (
          <section
            key={collection}
            className='mb-12'
          >
            <h2 className='text-2xl font-semibold capitalize mb-4'>
              {collection}
            </h2>
            <div
              className='grid grid-cols-2 sm:grid-cols-3 
            md:grid-cols-4 gap-4 auto-rows-[200px]'
            >
              {images.map((src: string) => (
                <img
                  key={`${collection}-${src}`}
                  loading='lazy'
                  src={src}
                  alt={`${collection}-${src}`}
                  className='w-full h-full object-cover rounded'
                />
              ))}
            </div>
          </section>
        ),
      )}
    </div>
  )
}

export default Gallery
