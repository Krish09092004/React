import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1 className='bg-green-400 text-black p-5 rounded-xl mb-5'>Tailwind test</h1>
  <Card username="Hello World" btntext="Click me "/>  {//here username and btntext are the props which are used to send there values to the html code
}
  <Card username="Krishna"/>
  </>
  )
}

export default App
