import { useState } from 'react'
import './App.css'

function App() {
 const [value,setValue] = useState('');


  return (
  <>
  <div data-theme="dark"> 
  <div className='bg-gray-500 w-3/4 ml-32 mt-8 rounded-lg shadow-2xl backdrop-blur-lg glass ' style={{height:"1150px"}}>
  <div className='h-10'></div>
  <div className="bg-black rounded-xl h-40 font-bold" style={{width:"860px",marginLeft:"23px"}}>
    <div className='h-12'></div>
  <div className=' text-white font-bold w-10 text-5xl h-40 ml-10 ' style={{width:"800px"}}  id="display">
    <input type='text' value={value} disabled className='ring-2 ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900'/>
  </div>
  </div>
    
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl btn-circle font-bold drop-shadow-xl backdrop-blur-sm" value="AC" onClick={e => setValue('')}  style={{marginLeft:"20px",marginTop:"80px"}}>C</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle drop-shadow-xl backdrop-blur-sm" value="DE" onClick={e => setValue(value.slice(0,-1))} style={{marginLeft:"+80px",marginTop:"80px"}}>---</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle drop-shadow-xl backdrop-blur-sm" value="%" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"80px"}}>%</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle  drop-shadow-xl backdrop-blur-sm" value="/" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"80px"}}>/</button>

<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl btn-circle font-bold " value="7" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"20px",marginTop:"30px"}}>7</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="8" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"30px"}}>8</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="9" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"30px"}}>9</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="*" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"30px"}}>*</button>

<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl btn-circle font-bold " value="4" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"20px",marginTop:"30px"}}>4</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="5" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"30px"}}>5</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="6" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"30px"}}>6</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="-" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"30px"}}>-</button>
  
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl btn-circle font-bold " value="1" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"20px",marginTop:"30px"}}>1</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="2" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"30px"}}>2</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="3" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"30px"}}>3</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="+" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"30px"}}>+</button>


<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="00" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"20px",marginTop:"40px"}}>00</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="0" onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"40px"}}>0</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="." onClick={e => setValue(value+e.target.value)} style={{marginLeft:"+80px",marginTop:"40px"}}>.</button>
<button className="btn btn-active w-36 h-32 ring-2 hover:ring-purple-800 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-4xl font-bold btn-circle " value="=" onClick={e => setValue(eval(value))} style={{marginLeft:"+80px",marginTop:"40px"}}>=</button>
  
  </div>
  
  </div>
  </>
  )
}

export default App
