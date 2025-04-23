import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
//johndoe@gmail.com
const loginFormValidator = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().min(6).required("password is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormValidator),
  });

  const redirect = useNavigate();
  const [error, setError] = useState(false);
  const onLogin = (data) => {
    console.log(data);
    const { email, password } = data;
    if (email === "johndoe@gmail.com" && password === "password") {
      //redirect
      redirect("/timeline");
      // protected route
    } else {
      //show error message
      setError(true);
    }
  };
  return (
    <div>
      <form className="myform" onSubmit={handleSubmit(onLogin)}>
        <h1 className="text-2xl">Login to continue</h1>
        <input
          type="email"
          className="input mt-2 w-full"
          placeholder="Email Address"
          {...register("email")}
        />
        <p className="text-sm text-red-500">{errors.email?.message}</p>
        <input
          type="password"
          className="input mt-2 w-full"
          placeholder="Password"
          {...register("password")}
        />
        <p className="text-sm text-red-500">{errors.password?.message}</p>
        {error && (
          <div className="rounded-md w-full bg-red-300 p-3 my-2">
            <p className="text-red-500">Invalid Email or Password</p>
          </div>
        )}
        <button className="btn btn-primary w-full mt-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
