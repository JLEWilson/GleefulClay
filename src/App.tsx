import React from 'react'
import join from './utils'
// import About from './components/about'

const App: React.FC = () => {
  const [route, setRoute] = React.useState('home')

  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      <div className='relative z-0 text-center pb-24 bg-background min-h-screen'>
        <div>
          {route === 'home' && <></>}
          {route === 'gallery' && <></>}
          {route === 'about' && <></>}
        </div>
      </div>
    </div>
  )
}

export default App
