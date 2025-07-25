import React, { useEffect, useState } from 'react'

interface BackgroundSlideshowProps {
  images: string[]
  duration?: number // Time per image in ms
  className?: string
}

const BackgroundSlideshow: React.FC<BackgroundSlideshowProps> = ({
  images,
  duration = 5000,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length === 0) return undefined

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, duration)

    return () => clearInterval(interval)
  }, [images, duration])

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 flex items-center 
            justify-center transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <div
            className='bg-cover md:bg-contain bg-no-repeat bg-center w-full h-full'
            style={{ backgroundImage: `url(${src})` }}
          />
        </div>
      ))}
    </div>
  )
}

export default BackgroundSlideshow
