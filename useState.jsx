import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const [counter, setCounter] = useState(0);
  const [car, setCar] = useState({
    color: "red",
    year: "2022",
  });

  const handleIncrement = () => {
    setCounter((prev) => {
      return prev + 1;
    });
  };
  const handleDecrement = () => {
    setCounter((prev) => {
      return prev - 1;
    });
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = ()=> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res()
      }, 4000);
    })
  }

  const onSubmit = async(data) => {
    await delay();
    setCar((prev) => {
      return {...prev, color : data.color, year : data.year}
    }) 
  }

  return (
    <>
    {isSubmitting && <p>Loading ..</p>}
      <div>Counter : {counter}</div>
      <button onClick={handleIncrement}>Increment By 1</button>
      <button onClick={handleDecrement}> Decrement By 1</button>

      <h2>
        My car color is {car.color} and year is {car.year}
      </h2>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("color", {
            required: { value: true, message: "The color is required" },
            minLength: {
              value: 3,
              message: "should contain at least 2 characters",
            },
          })}
        />
        {errors.color && errors.color.message}

        <input
          type="number"
          {...register("year", {
            required: { value: true, message: "The color is required" },
            min: {
              value: 2005,
              message: "car year should cnot less than 2005",
            },
          })}
        />
        {errors.year && errors.year.message}

        <button disabled={isSubmitting} type="submit">
          submit
        </button>
      </form>
    </>
  );
}

export default App;
