import React, { useState } from 'react'

const BulbButtons = () => {
    const [toggle, setToggle] = useState()

    const handleOnbulb =()=>{
        setToggle('ON')
    }

    const handleOffbulb =()=>{
        setToggle('OFF')
    }

  return (
    <div>
        <h2>The Bulb is {toggle}</h2><br/>
        <input type="radio" name="bulb" onClick={handleOnbulb}/>
        <input type="radio" name="bulb" onClick={handleOffbulb}/>
    </div>
  )
}

export default BulbButtons
