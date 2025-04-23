import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

//useForm - register, handleSubmit
//yup, zod
const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Minimum password length is 7"),
});
const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (data) => {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log(data);
      //after doing what you are meant to do
      setIsSubmitting(false);
      reset();
    }, 5000);
  };

  return (
    <div>
      <form className="myform" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1>Submit your Details</h1>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.firstName ? "border border-red-500" : ""
          }`}
          placeholder="First Name"
          {...register("firstName")}
        />

        <p className="text-red-500">
          {errors.firstName && errors.firstName.message}
        </p>

        <input
          type="text"
          placeholder="Last Name"
          className={`input mt-2 w-full ${
            errors.lastName ? "border border-red-500" : ""
          }`}
          {...register("lastName")}
        />

        <p className="text-red-500">
          {errors.lastName && errors.lastName.message}
        </p>

        <input
          type="email"
          className={`input mt-2 w-full ${
            errors.email ? "border border-red-500" : ""
          }`}
          placeholder="Email Address"
          {...register("email")}
        />
        <p className="text-red-500">{errors.email && errors.email.message}</p>
        <input
          type="password"
          placeholder="Enter Your Password"
          className={`input mt-2 w-full ${
            errors.password ? "border border-red-500" : ""
          }`}
          {...register("password")}
        />
        <p className="text-red-500">
          {errors.password && errors.password.message}
        </p>

        <button type="submit" className="btn btn-accent w-full mt-2.5">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
