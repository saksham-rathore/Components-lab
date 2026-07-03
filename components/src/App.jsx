import React from 'react'
import Leftnode from './assets/Components/Leftnode'
import Right_nodes from './assets/Components/Right_nodes'
import Oneline from './assets/Components/Oneline'
import Animate_lines from './assets/Components/Animate_lines'
// import './index.css'


const App = () => {
  return (
    <div className='flex justify-center w-full h-screen'>
      <Leftnode />
      <Animate_lines />
      <Oneline />
      <Right_nodes />
    </div>
  )
}

export default App