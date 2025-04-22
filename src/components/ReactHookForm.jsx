import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// useForm - register, handleSubmit
// yup, zod

// define the validation schema
const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: yup.string().required("Please provide a password"),
});

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="myform bg-white"
      >
        <h1>Submit Your Details</h1>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.firstName ? "border-2 border-red-500" : ""
          }`}
          placeholder="First Name"
          {...register("firstName")}
        />
        <p className="text-red-500">
          {errors.firstName && errors.firstName.message}
        </p>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.lastName ? "border-2 border-red-500" : ""
          }`}
          placeholder="Last Name"
          {...register("lastName")}
        />
        <p className="text-red-500">
          {errors.lastName && errors.lastName.message}
        </p>
        <input
          type="email"
          className={`input mt-2 w-full ${
            errors.email ? "border-2 border-red-500" : ""
          }`}
          placeholder="Email Address"
          {...register("email")}
        />
        <p className="text-red-500">{errors.email && errors.email.message}</p>
        <input
          type="password"
          placeholder="Password"
          className={`input mt-2 w-full ${
            errors.password ? "border-2 border-red-500" : ""
          }`}
          {...register("password")}
        />
        <p className="text-red-500">
          {errors.password && errors.password.message}
        </p>
        <button type="submit" className="btn btn-accent w-full mt-2.5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
