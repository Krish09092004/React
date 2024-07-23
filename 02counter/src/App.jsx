import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setcounter] = useState(5)   //you can use any name in setcounter name like k,anything 
  //let counter = 5
  const addvalue = () =>{
    counter += 1
   // setcounter(prevcounter => prevcounter+1) //prevcounter is used to get counter value and then add new one to that value
   // setcounter(prevcounter => prevcounter+1) // here prevcounter takes the previuos value of prevcounter and 1 to it
    //setcounter(prevcounter => prevcounter+1) // so the final output of counter will be 5+3 =8 after 1 click
    //which means every time user click the add value it will increment the value to +3 and show it
    setcounter(counter)
  }
  const removevalue = () =>{
    if(counter>0){
    counter -= 1
    setcounter(counter)
    }
    else{
      counter = 0 ;
      setcounter(counter)
    }
  }
  
  return (
    <>
  <h1>Hello World !</h1>
  <h2>Counter Value: {counter}</h2>

  <button onClick={addvalue}>Add Value</button>
  <br></br>
  <br></br>
  <button onClick={removevalue}>Decrease Value</button>
</>
  )
}

export default App
