import React from 'react'
import Navigation from './components/navigation'
import Home from './routes/home'
import Gallery from './routes/gallery'
import About from './routes/about'

const App: React.FC = () => {
  const [route, setRoute] = React.useState('home')

  return (
    <div
      className='flex flex-col min-h-screen overflow-hidden
    bg-gradient-to-b from-background to-[#fbfbf9]'
    >
      <Navigation setRoute={setRoute} />
      <main className='flex-grow '>
        {route === 'home' && <Home />}
        {route === 'gallery' && <Gallery />}
        {route === 'about' && <About />}
      </main>
    </div>
  )
}

export default App
