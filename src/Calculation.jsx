import React, { useState } from 'react'

const Calculation = (props) => {
    const [result, setResult]=useState()

    const handleAdd = ()=>{
        setResult(Number(props.a)+Number(props.b))
    }

    const handleSub = ()=>{
        setResult(props.a-props.b)
    }

    const handleDiv = ()=>{
        setResult(props.a/props.b)
    }

    const handleMul = ()=>{
        setResult(props.a*props.b)
    }

  return (
    <div>
      <input type="button" value="Add" onClick={handleAdd}/> 
      <input type="button" value="sub" onClick={handleSub}/> 
      <input type="button" value="div" onClick={handleDiv}/>
      <input type="button" value="mul" onClick={handleMul}/><br/>
      <h6>Result : {result}</h6>
    </div>
  )
}

export default Calculation
