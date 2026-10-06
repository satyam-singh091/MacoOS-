import React, { useState } from 'react'
import "./app.scss"
import Dock from "./components/Dock"
import Nav from './components/Nav'
import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume from './components/Windows/Resume'
import Spotify from './components/Windows/Spotify'
import Cli from './components/Windows/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const App = () => {

  const [activeWindow, setActiveWindow] = useState()

  const [windowState, setwindowState] = useState({
    github:false,
    note:false,
    pdf:false,
    spotify:false,
    cli:false
  })

  return (
  <main>
    <Nav />
   <Dock windowState={windowState} setwindowState={setwindowState} onCliClick={() => setActiveWindow('cli')} />

   {windowState.github && <Github windowName="github" setwindowState={setwindowState} 
     isActive={activeWindow === 'github'}
     onActivate={() => setActiveWindow('github')}
   />}

  { windowState.note && <Note windowName="note" setwindowState={setwindowState} 
     isActive={activeWindow === 'note'}
     onActivate={() => setActiveWindow('note')}
   />}

  {windowState.pdf && <Resume windowName="pdf" setwindowState={setwindowState} 
     isActive={activeWindow === 'resume'}
     onActivate={() => setActiveWindow('resume')}
   />}

  { windowState.spotify && <Spotify windowName="spotify" setwindowState={setwindowState} 
     isActive={activeWindow === 'spotify'}
     onActivate={() => setActiveWindow('spotify')}
   />}

  {windowState.cli && <Cli windowName="cli" setwindowState={setwindowState} 
     isActive={activeWindow === 'cli'}
     onActivate={() => setActiveWindow('cli')}
   />}

  </main>
  )
}

export default App
