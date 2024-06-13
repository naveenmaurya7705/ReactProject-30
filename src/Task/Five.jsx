//! Implement a basic toggle switch component 

import {React , useState} from 'react'

const Five = () => {

const handleToggle = () =>{
    setIsToggle(!isToggle);
}

const [isToggle , setIsToggle] = useState(false)

  return (
    <div>
    
    <label>
        <input type='checkbox' onChange={handleToggle} />
  </label>
    <p>{isToggle ? "On" : "Off"}</p>

    </div>
  )
}

export default Five