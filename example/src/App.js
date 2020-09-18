import React from 'react'

import { CardMemoryGame } from 'card-memory-react'
import 'card-memory-react/dist/index.css'

const App = () => {
  return <CardMemoryGame size={360} colors={['red', 'yellow', 'pink', 'blue']} number={49} />
}

export default App
