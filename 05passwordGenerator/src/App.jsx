import { useState , useCallback , useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(5) 
  const [numallow,setnumallow] = useState(false)
  const [charallow,setcharallow] = useState(false)
  const [password,setpassword] = useState("")
  
  //use ref hook 
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {    //callback is a react hook which is used for cache a function defination between re-rander of DOM
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numallow) str += "0123456789"
    if (charallow) str+= "!@#$%^&*=-`~?"

    //to generate the random password
    for (let i = 1; i <= length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
    setpassword(pass)
  } , [length,numallow,charallow,setpassword])
  
    const copyPassword = useCallback(() => {
      passwordref.current?.select();
      passwordref.current?.setSelectionRange(0,20)
      window.navigator.clipboard.writeText(password)
     },[password])

  //useEffect is used for a synchronize a componant with a external system , in simple word it is used to run an certain event whenever certain condition changes
  useEffect(() => {
    passwordGenerator() 
  }, [length,charallow,numallow,passwordGenerator ]) //these are the conditions , whenever these fields are changing then the passwordGenerator function run


       //styling the copy button
    /*  hovering effect
        const hover = () =>{
        document.getElementById("test").style.backgroundColor="green";
      }
   
      const nothover = () =>{
        document.getElementById("test").style.backgroundColor="indigo";
      }
      */   
      const click = () =>{
        document.getElementById("test").innerHTML="copied";
        document.getElementById("test").style.backgroundColor="Green";
      }

      const notclick = () =>{
        document.getElementById("test").innerHTML="copy";
        document.getElementById("test").style.backgroundColor="indigo";
      }
      

  return (
   <>
  <div className='w-full max-w-md h-24 mb-2 text-4xl pt-6 mx-auto shadow-md rounded-lg px-4 mt-16 text-white bg-gray-600'>Password Generator</div>
    <div className='w-full max-w-md pt-6 h-full mx-auto shadow-md rounded-lg px-4 mt-8 text-white bg-gray-600'>
      <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
        <input type='text' value = {password}  ref={passwordref} className='outline-none w-full h-16 py-1 px-3 text-2xl text-black font-bold' placeholder='password' readOnly />
        <button onClick={copyPassword} id="test" /*onMouseMove={hover} onMouseOut={nothover}*/ onMouseDown={click} onMouseUp={notclick} className='text-2xl bg-indigo-900 ml-8 w-24 outline-none shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-3'>
          <input type="range" min={6} max={20} value={length} onChange={(e) => {setlength(e.target.value)}} className='cursor-pointer ml-8 w-48 mt-6 h-10'/>
          <label className='text-2xl ml-4 mt-7'>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>

{ //here we used prev to get access to the previous value of the checkbox. if it is true or false .after that it set to its alternative value
}

        <input type='checkbox' className='mt-12 h-5 w-5 ml-8 mb-10 cursor-pointer ' defaultChecked={numallow} id='numInput' onChange={() => {setnumallow((prev)=>!prev)}} />
          <label className='text-2xl ml-4 mt-2'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-0'>

{//here we used prev to get access to the previous value of the checkbox. if it is true or false .after that it set to its alternative value
}     
        <input type='checkbox' className=' h-5 w-5 ml-56 mb-10 -mt-16 cursor-pointer ' defaultChecked={charallow} id='charInput' onChange={() => {setcharallow((prev)=>!prev)}} />
          <label className='text-2xl ml-4 -mt-16 mb-10'>Characters</label>
      </div>
    </div>

   </> 
  )
}

export default App
