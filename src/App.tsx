import React from 'react'
import Navigation from './components/navigation'
import Home from './routes/home'
import Gallery from './routes/gallery'
import About from './routes/about'

const App: React.FC = () => {
  const [route, setRoute] = React.useState('home')

  return (
    <div
      className='min-h-screen w-full 
    bg-gradient-to-b from-background to-[#fbfbf9] overflow-auto'
    >
      <Navigation setRoute={setRoute} />
      <main className='px-4 pb-12'>
        {route === 'home' && <Home />}
        {route === 'gallery' && <Gallery />}
        {route === 'about' && <About />}
      </main>
    </div>
  )
}

export default App
