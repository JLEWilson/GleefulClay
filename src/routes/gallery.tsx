import React, { useState } from 'react'
import COLLECTIONS from '../consts/photoGroups'
import ImageCarousel from '../components/imageCarousel'

const Gallery = () => {
  const [activeCollection, setActiveCollection] = useState<string | null>(null)

  return (
    <div
      className='flex flex-col items-center justify-center pt-8 
        h-screen px-4 text-center'
    >
      {Object.keys(COLLECTIONS).map((collection) => (
        <section
          key={collection}
          className='mb-12 w-full max-w-6xl text-center'
        >
          <button
            type='button'
            onClick={() => setActiveCollection(collection)}
            className='text-2xl font-semibold capitalize mb-4 block 
              hover:underline hover:text-secondary mx-auto'
          >
            {collection}
          </button>
        </section>
      ))}

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
