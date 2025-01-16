import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import Header from "./components/header";
import { useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const fun = useCallback(() => {},[count]);

  return (
    <>
    <Header fun ={fun} ></Header>
      <button onClick={() => setCount(count + 1)}>Count ++</button>
      {count}
    </>
  );
}

export default App;
