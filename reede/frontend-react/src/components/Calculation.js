import React from "react"

const Calculation = ({ nr }) => {  
    const [total, setTotal] = React.useState(0)
  
    const square = ()=>{
        setTotal(total*total)
    }
    const add = ()=>{
        setTotal(total + 1)
    }
    const nullify = ()=>{
        setTotal(0)
    }

    return (
      <>
        <h1>Answer: {total}</h1>
        <button onClick={square}>Number: {total} Times square</button>
        <br/>
        <br/>
        <button onClick={add}>Number: {total} + 1</button>
        <br/>
        <br/>
        <button onClick={nullify}>Set number to zero</button>
      </>
    )
}

export default Calculation