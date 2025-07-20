import React, { useState } from 'react'
import COLLECTIONS from '../consts/photoGroups'
import ImageCarousel from '../components/imageCarousel'

const Gallery = () => {
  const [activeCollection, setActiveCollection] = useState<string | null>(null)

  return (
    <div
      className='flex flex-col items-center justify-center 
    min-h-screen p-4 overflow-y-auto pb-20 md:pb-0'
    >
      <div className='w-full max-w-6xl'>
        <div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
         lg:gap-16 gap-6 justify-center items-center'
        >
          {Object.entries(COLLECTIONS).map(
            ([collection, images], index, array) => {
              const previewImage = images[0]
              const isLastItem = index === array.length - 1
              const isTwoColumnLayout = array.length % 2 === 1

              return (
                <div
                  key={collection}
                  className={`w-full ${
                    isLastItem && isTwoColumnLayout
                      ? 'sm:col-span-2 sm:flex sm:justify-center lg:col-span-1'
                      : ''
                  }`}
                >
                  <button
                    type='button'
                    onClick={() => setActiveCollection(collection)}
                    className='relative h-40 sm:h-48 w-full text-white font-semibold
          text-xl capitalize rounded overflow-hidden group 
          transition-transform duration-300 hover:scale-105 shadow-lg'
                    style={{
                      backgroundImage: `url(${previewImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Gradient sweep overlay */}
                    <div
                      className='absolute inset-0 z-0 bg-gradient-to-br 
            from-black/20 via-black/10 to-black/20 
            group-hover:from-black/40 group-hover:to-black/40 
            transition-opacity duration-500'
                    />
                    {/* Centered label */}
                    <div className='absolute inset-0 z-10 flex items-center justify-center'>
                      <span className='drop-shadow-lg'>{collection}</span>
                    </div>
                  </button>
                </div>
              )
            },
          )}
        </div>
      </div>

      {activeCollection && (
        <ImageCarousel
          images={COLLECTIONS[activeCollection]}
          title={activeCollection}
          onClose={() => setActiveCollection(null)}
        />
      )}
    </div>
  )
}

export default Gallery
