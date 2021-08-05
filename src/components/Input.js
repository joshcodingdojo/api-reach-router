import { navigate } from "@reach/router";
import { useState } from "react";

const Input = () => {
  const [id, setId] = useState(undefined);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/display/${id}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      ID:{" "}
      <select name="" onChange={(e) => setId(e.target.value)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <button>Submit</button>
    </form>
  );
};

export default Input;
