import { useState } from 'react';
import React from 'react'
import Calculation from './Calculation';

const Numbers = () => {
    const[firstnumber, setFirstnumber] = useState()
    const[secondnumber, setSecondNumber] = useState()


    const FirstNumber = (event)=>{
        setFirstnumber(event.target.value)
    }

    const SecondNumber = (event)=>{
        setSecondNumber(event.target.value)
    }
  return (
    <div>
      <input type='number' placeholder='First Number' name='FirstNumber' onChange={FirstNumber}></input>
      <input type='number' placeholder='Second Number' name='SecondNumber' onChange={SecondNumber}></input><br></br>
    
    
    <Calculation a={firstnumber} b={secondnumber}/>
    </div>
  )
}

export default Numbers
