import React, { useState } from 'react'
import Typography from '../Typography'

const routes = [
  { name: 'Home', route: 'home' },
  { name: 'Gallery', route: 'gallery' },
  { name: 'About', route: 'about' },
  // { name: 'Contact', route: 'contact' },
]

interface NavigationProps {
  setRoute: (route: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ setRoute }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='z-50 absolute top-0 right-0'>
      {/* Hamburger Toggle Button */}
      <div className='flex justify-end items-center p-8'>
        <button
          type='button'
          onClick={() => setMenuOpen(!menuOpen)}
          className='relative w-8 h-6 flex flex-col justify-between
           items-center cursor-pointer z-50'
          aria-label='Toggle Menu'
        >
          <span
            className={`block w-full h-1 bg-text transform transition duration-300 ease-in-out 
              ${menuOpen ? 'rotate-45 translate-y-3' : ''}`}
          />
          <span
            className={`block w-full h-1 bg-text transition-all duration-300 ease-in-out 
              ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-full h-1 bg-text transform transition duration-300 ease-in-out 
              ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      <div
        className={`fixed top-0 pt-16 right-0 max-w-sm
          bg-[#fbfbf9] z-40 shadow-xl transition-transform
          duration-300 ease-in-out rounded-bl-lg
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex flex-col items-end p-4'>
          {routes.map((r) => (
            <button
              type='button'
              key={`MobileButton: ${r.name}`}
              onClick={() => {
                setRoute(r.route)
                setMenuOpen(false)
              }}
              className='py-2 transition duration-100 ease-in-out hover:scale-110'
            >
              <Typography
                className='text-text font-PlayfairDisplay  hover:text-secondary font-bold'
                variant='h2'
              >
                {r.name}
              </Typography>
            </button>
          ))}
          <a
            href='mailto:limaweav2000@hotmail.com'
            title='limaweav2000@hotmail.com'
            className=' hover:scale-110 transition duration-150'
          >
            <Typography
              className='text-text font-PlayfairDisplay  hover:text-secondary font-bold'
              variant='h2'
            >
              Contact
            </Typography>
          </a>
        </div>
      </div>

      {/* Desktop Menu
      <div className='hidden md:flex gap-10 justify-end items-center p-4'>
        {routes.map((r) => (
          <button
            key={`DesktopButton: ${r.name}`}
            onClick={() => setRoute(r.route)}
            type='button'
            className='hover:text-secondary transform transition
              duration-100 ease-in-out hover:scale-110'
          >
            <Typography
              className='text-text font-PlayfairDisplay font-bold'
              variant='h2'
            >
              {r.name}
            </Typography>
          </button>
        ))}
      </div> */}
    </nav>
  )
}

export default Navigation
