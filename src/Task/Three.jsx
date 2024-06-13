//! create a form that take user input and display it in the real time

import {React , useState} from 'react'

const Three = () => {

    const [input , setInput] = useState("")
  return (
    <div>

 <input type='text' value={input}  onChange={(e)=> setInput(e.target.value)}/>

 <h5>User Input : {input}</h5>



    </div>
  )
}

export default Three