import { useState } from "react";
//preventdefault, onSubmit or onClick on btn
//controlled input - set up state values for all input fields
//value, onChange
const SimpleForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [users, setusers] = useState([]);
  // [{john doe}, {jane}]

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //functions
    console.log(firstName, lastName);
    if (!firstName.trim || !lastName.trim()) {
      //display error message
      setError("please fill all fields");
      return;
    }

    //add new user to users array
    setusers([...users, { firstName, lastName }]);
    setFirstName("");
    setLastName("");
    setError("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <p className="text-red-500">{error}</p>
        <input
          type="text"
          placeholder="First Name"
          className="myinput"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="myinput"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className="mybtn">
          Submit
        </button>
      </form>
      {users.length > 0 && (
        <div className="myform">
          <h1>List Of Users</h1>
          {users.map((user, index) => {
            return (
              <p key={index}>
                {user.firstName} {user.lastName}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SimpleForm;
