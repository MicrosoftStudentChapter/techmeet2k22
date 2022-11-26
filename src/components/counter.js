import React,{ useState } from "react"
const counter = () => {
    // Use useState change the state of variable named counter

    // make an arrow funtion named handleClick1 which will increment the vaule of counter by 1
    
    // make an arrow funtion named handleClick2 which will decrement the vaule of counter by 1
    
    return (
        <div className="style">
      <center>
        Counter App
      <br/>
        <div className="counter">
            {counter}
        </div>
        <div className="buttons">
        <button className="increment" onClick={handleClick1}>Increment</button>
            <button className="decrement" onClick={handleClick2}>Decrement</button>
        </div>
      </center>
        </div>
    
    )
    }
    
    export default counter
    