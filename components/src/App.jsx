import React from 'react'
import Mid_node from './assets/Components/Mid_node'
import Left_nodes from './assets/Components/Left_nodes'
import Leftnode from './assets/Components/Leftnode'
import Right_nodes from './assets/Components/Right_nodes'
import Oneline from './assets/Components/Oneline'
import Animate_lines from './assets/Components/Animate_lines'

const App = () => {
  return (
    <div>
      <Left_nodes />
      <Animate_lines />
      <Leftnode />
      <Oneline />
      <Mid_node />
      <Right_nodes />
    </div>
  )
}

export default App