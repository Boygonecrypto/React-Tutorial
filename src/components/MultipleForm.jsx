import { useState } from "react";
// multiple inputs - using one state value to handle all inputs
const MultipleForm = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    age: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  //[name] - dynamic value

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, age } = user;
    if (!fullName.trim() || !email.trim() || !age) {
      setError("Please provide all values");
      return;
    }

    //do what you want to do
    console.log(user);
    //default back to the beginning
    setError("");
    setUser({
      fullName: "",
      email: "",
      age: "",
    });
  };
  return (
    <div>
      <form className="myform" onSubmit={handleSubmit}>
        <h1>Submit Your Details</h1>
        <p className="text-red-500">{error}</p>
        <input
          type="text"
          className="myinput"
          placeholder="Full Name"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          className="myinput"
          placeholder="Email Address"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="number"
          className="myinput"
          placeholder="Age"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <button className="mybtn">Submit</button>
      </form>
    </div>
  );
};

export default MultipleForm;
