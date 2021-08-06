import { Router } from "@reach/router";
import "./App.css";
import About from "./components/About";
import Display from "./components/Display";
import Input from "./components/Input";
import Form from "./components/Form";
import DisplayName from "./components/DisplayName";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(
    "First name must be at leats 2 characters"
  );
  const [firstNameArray, setFirstNameArray] = useState([]);
  const handleFirstName = (e) => {
    if (e.target.value.length < 2) {
      setFirstNameError("First name must be at leats 2 characters");
    } else {
      setFirstNameError("");
    }
    setFirstName(e.target.value);
  };
  const handleSubmitName = (e) => {
    e.preventDefault();
    setFirstNameArray([firstName, ...firstNameArray]);
    setFirstName("");
  };
  return (
    <div className="App">
      <Form
        handleFirstName={handleFirstName}
        handleSubmitName={handleSubmitName}
        firstNameError={firstNameError}
      />
      {/* list first names */}
      <DisplayName firstNameArray={firstNameArray} />
      {/* {firstNameArray.map((name, index) => (
        <p key={index}>{name}</p>
      ))} */}
    </div>
  );
}

export default App;
