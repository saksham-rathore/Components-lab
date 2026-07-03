import React from 'react'
import Leftnode from './assets/Components/Leftnode'
import Right_nodes from './assets/Components/Right_nodes'
import Oneline from './assets/Components/Oneline'
import Animate_lines from './assets/Components/Animate_lines'
import Usernode from './assets/Components/Usernode'
// import './index.css'

const App = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen overflow-hidden bg-white">
      <div className="flex items-center" style={{ transform: 'scale(0.35)', transformOrigin: 'center' }}>
        <div className="z-10 relative">
          <Leftnode />
        </div>
        <div className="z-0 -ml-[112px] relative">
          <Animate_lines />
        </div>
        <div className="z-10 -ml-[162px] relative">
          <Right_nodes />
        </div>
        <div className="z-0 -ml-[162px] relative">
          <Oneline />
        </div>
        <div className="z-10 -ml-[112px] relative">
          <Usernode />
        </div>
      </div>
    </div>
  )
}

export default App