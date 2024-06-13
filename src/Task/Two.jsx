//! create a increment counter and decrement counter


import {React , useState} from 'react'



const Two = () => {

    const[count , setCount] = useState(0)
  return (
    <>
    <button onClick={()=>setCount(count+1)}>+</button><br/><br/>
    <div>{count}</div><br/>
     <button onClick={()=>setCount(count-1)}>-</button>
     </>
  )
}

export default Two