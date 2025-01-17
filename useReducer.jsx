import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import Header from "./components/header";
import Footer from "./components/footer";

import { useReducer } from "react";

function App() {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        return { count: state.count + 1 };
      }
      case "decrement": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Counter is : {state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        count ++{" "}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        count --{" "}
      </button>


      <input type="number"  value={state.count} onChange={(e) => {dispatch({type : 'input', payload :e.target.value})}} />
    </>
  );
}

export default App;
