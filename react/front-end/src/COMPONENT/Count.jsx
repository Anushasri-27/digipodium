import { useState } from "react";
const Count = () => {
  const [count , setCount] = useState(0);
  const handleIncrement = () =>{
    setCount(count+1);
  }
  const handledecrement = () =>{
    setCount(count-1);
  }
  const handleReset = () =>{
    setCount(0);
  }
  return (
    <div className=" d-flex w-100">
      <p className="bg-danger w-100 d-flex justify-content-center align-items-center"><h1>{count}</h1></p>
      <div className="button-counter">
        <button onClick={handleIncrement} className="increment btn btn-danger mx-3 p-3 bordererd mb-3 w-50">increment</button>
        <button onClick={handledecrement} className="decrement btn btn-danger mx-3 p-3 bordererd mb-3 w-50">deccrement</button>
        <button onClick={handleReset} className="re-set btn btn-danger mx-3 p-3 bordererd mb-3 w-50">re-set</button>
      </div>  
    </div>
  )
}

export default Count;
