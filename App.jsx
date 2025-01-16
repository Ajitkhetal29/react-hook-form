import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const onSubmit = async (data) => {
    await delay();

    if(data.username === 'jay')
      setError("blocked", {message : 'sorry this user is blocked'})

  };

  return (
    <>
      {isSubmitting && <div>Loading</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: { value: true, message: "this filed is required" },
          })}
        />
        {errors.username && errors.username.message}

        <br />
        <input
          type="password"
          {...register("password", {
            minLength: { value: 3, message: "Min length is 3" },
            maxLength: { value: 5, message: "Max length is 5" },
          })}
        />
        {errors.password && errors.password.message}

        <br />
        <input disabled={isSubmitting} type="submit" value="submit" />

        {errors.blocked && errors.blocked.message}
      </form>
    </>
  );
}

export default App;
