import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const [count, setCount] = useState(0);
  const [number , setNumber] = useState(0)

  const findCube = (num) => {
    console.log("calculation Done");
    return Math.pow(num,3)
  };

  const result = useMemo(()=> {
    return findCube(number)
  }, [number])

  return (
    <>  
    <input type="text" value={number}  onChange={(e)=> {setNumber(e.target.value)}} />
    <p>The cube of the entered numb is {result}</p>

      <button onClick={() => setCount(count + 1)}>Count ++</button>
      {count}
    </>
  );
}

export default App;
