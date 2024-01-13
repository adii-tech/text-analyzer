import { useState } from 'react'
import './App.css'
import Page from './component/page';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Page />
    </>
  )
}

export default App
