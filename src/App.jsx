import { useState } from 'react'
import './App.scss'

import ListItem from './components/atoms/ListItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      App
      <ListItem></ListItem>
    </div>
  )
}

export default App
