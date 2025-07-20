import React, { useEffect, useRef } from 'react'

interface BackgroundSlideshowProps {
  images: string[]
  duration?: number
  className?: string
}

const BackgroundSlideshow: React.FC<BackgroundSlideshowProps> = ({
  images,
  duration = 30000,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || images.length === 0) return

    containerRef.current.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }],
      {
        duration,
        iterations: Infinity,
        easing: 'linear',
      },
    )
  }, [images.length, duration])

  const loopedImages = [...images, ...images] // Duplicate the array

  return (
    <div className={`absolute inset-0 overflow-hidden  z-0 ${className}`}>
      <div
        ref={containerRef}
        className='flex h-full gap-10 w-fit'
        style={{
          width: `${loopedImages.length * 100}vw`,
        }}
      >
        {loopedImages.map((src) => (
          <div
            key={src}
            className='h-full w-screen bg-center bg-cover flex-shrink-0'
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  )
}

export default BackgroundSlideshow
