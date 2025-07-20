import React from 'react'
import Typography from '../Typography'

const routes = [
  { name: 'Home', route: 'home' },
  { name: 'Gallery', route: 'gallery' },
  { name: 'About', route: 'about' },
]

interface NavigationProps {
  setRoute: (route: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ setRoute }) => {
  return (
    <nav
      className='w-full h-16 z-50 bg-[#fbfbf9] md:bg-transparent
    fixed md:top-0 bottom-0 flex justify-evenly items-center p-4'
    >
      {routes.map((r) => (
        <button
          key={`Button: ${r.name}`}
          type='button'
          onClick={() => setRoute(r.route)}
          className='hover:text-secondary transform transition duration-100 
           ease-in-out hover:scale-110'
        >
          <Typography
            key={`Text: ${r.name}`}
            className='text-text font-PlayfairDisplay 
              font-bold hover:text-secondary'
            variant='h2'
          >
            {r.name}
          </Typography>
        </button>
      ))}
    </nav>
  )
}

export default Navigation
