import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("white")
  return (
  <>

  <div className='w-full h-full duration-200' style={{backgroundColor:color}}>
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className="flex flex-wrap justify-center h-15 gap-5 shadow-lg bg-black rounded-full px-4 py-3" style={{fontWeight:"bolder"}}>
      <button  onClick={() => setcolor("red") }className='outline-none px-4 py-1 rounded-full shadow-lg' id="1" style={{backgroundColor:"red"}}>Red</button>
      <button onClick={() => setcolor("Green")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"green"}}>Green</button>
      <button onClick={() => setcolor("purple")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>
      <button  onClick={() => setcolor("white")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:"white"}}>White</button>
      <button onClick={() => setcolor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
      <button onClick={() => setcolor("olive")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"olive"}}>Olive</button>
    </div>
  </div>
  </div>
  </>
  )
}

export default App