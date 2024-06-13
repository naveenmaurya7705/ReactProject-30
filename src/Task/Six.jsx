//!  Create a component that fetches data from an API and display it.

import {React,useEffect, useState} from 'react'

const Six = () => {

    const[data ,setData] = useState(null)
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then((Response) => Response.json())
.then((data) => console.log(data));
})

  return (
    <div>
    {
        data ?
        
         (<div>
 <h1>UserId: {data.userId}</h1>
 <h1>ID: {data.id}</h1>
<h1>Title: {data.title}</h1>
<h1>Body: {data.body}</h1>

         </div>):
        
        (<div>
          Loading....!
        </div>)

    }
    
    
    
    
    </div>
  )
}

export default Six