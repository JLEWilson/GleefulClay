import React from 'react'
import Navigation from './components/navigation'
import Home from './routes/home'
import Gallery from './routes/gallery'
import About from './routes/about'

const App: React.FC = () => {
  const [route, setRoute] = React.useState('home')

  return (
    <div
      className='min-h-screen w-full overflow-hidden 
    bg-gradient-to-b from-background to-[#fbfbf9]'
    >
      <Navigation setRoute={setRoute} />
      <div className='h-[calc(100vh-4rem)] overflow-hidden'>
        <div className='h-[calc(100vh-4rem)] overflow-hidden'>
          {route === 'home' && <Home />}
          {route === 'gallery' && <Gallery />}
          {route === 'about' && <About />}
        </div>
      </div>
    </div>
  )
}

export default App
