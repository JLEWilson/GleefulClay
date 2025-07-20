import React, { useState, useRef, useEffect } from 'react'

interface ImageCarouselProps {
  images: string[]
  onClose: () => void
  title?: string
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  onClose,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const [imageLoading, setImageLoading] = useState(true)

  // Reset loading state when image index changes
  useEffect(() => {
    setImageLoading(true)
  }, [currentIndex])

  const handleImageLoad = () => setImageLoading(false)

  const prevImage = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))

  const nextImage = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current
    if (delta > 50) nextImage()
    else if (delta < -50) prevImage()
  }

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-60 flex
     items-center justify-center z-50'
    >
      <div
        className='bg-white rounded p-4 max-w-xl w-full flex
       flex-col items-center text-center'
      >
        {title && (
          <h2 className='text-2xl font-semibold capitalize mb-4'>{title}</h2>
        )}

        <div
          className='relative w-full h-[300px] flex items-center 
          justify-center overflow-hidden'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type='button'
            onClick={prevImage}
            className='absolute left-0 px-2 py-1 
            text-2xl hover:text-secondary'
          >
            ‹
          </button>

          {/* Loader Overlay */}
          {imageLoading && (
            <div
              className='absolute inset-0 flex items-center 
            justify-center bg-white bg-opacity-70 z-10'
            >
              <div
                className='animate-spin rounded-full h-8 w-8 
              border-t-2 border-b-2 border-gray-500'
              />
            </div>
          )}

          <img
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            loading='lazy'
            onLoad={handleImageLoad}
            className='mx-auto max-h-full object-contain rounded
             transition-opacity duration-300'
          />

          <button
            type='button'
            onClick={nextImage}
            className='absolute right-0 px-2 py-1 text-2xl hover:text-secondary'
          >
            ›
          </button>
        </div>

        <button
          type='button'
          onClick={onClose}
          className='mt-4 text-xl text-secondary hover:underline'
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ImageCarousel
