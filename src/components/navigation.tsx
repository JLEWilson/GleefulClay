import React from 'react'
import Typography from '../Typography'
import join from '../utils'

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
    <div className='h-16 absolute top-0 left-0 w-full '>
      <nav
        className={join(
          `flex justify-evenly items-center h-full
       p-4 text-white`,
        )}
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
              variant='h3'
            >
              {r.name}
            </Typography>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Navigation
