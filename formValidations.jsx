import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import Header from "./components/header";
import Footer from "./components/footer";

import { useReducer } from "react";
import useLocalStorag from "./hooks/useLocalStorag";

function App() {
  const initialValues = {
    name: "",
    age: "",
  };

  const [formvalues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formvalues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formvalues));
    setIsSubmit(true);
  };

  // useEffect(()=>{
  //   if (Object.keys(formError).length === 0 && isSubmit){
  //     console.log(formvalues)
  //   } 
  // },[formError])

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.age) {
      errors.username = "age is required";
    } else if (Number(values.age) < 21) {
      errors.age = "age should be more than 21";
    }
    return errors;
  };

  return (
    <>
      {Object.keys(formError).length === 0 && isSubmit ? (
        <div className="ui message success">
          You name is {formvalues.name} and age is {formvalues.age}
        </div>
      ) : (
        ""
      )}
      <h5></h5>
      <form action="" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formvalues.name}
          onChange={handleChange}
        />
        {formError.username}
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formvalues.age}
          onChange={handleChange}
        />
        {formError.age}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
