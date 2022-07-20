import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { showMessageWithTimeout } from "../../store/appState/thunks";
import { setNewChild } from "../../store/child/thunks";
import { Button } from "../../styled/Button";

export default function AddChildForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [branch, setBranch] = useState("Amsterdam");
  const [group, setGroup] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setNewChild(name, age, branch, group));
    dispatch(
      showMessageWithTimeout("success", true, "New Child Created!", 15000)
    );
    setShowForm(false);
  };
  return showForm ? (
    <div className="formm">
      <form onSubmit={handleSubmit}>
        <h1>Add My Children</h1>
        <label> Name of Child:</label>
        <input
          className="form-i"
          type="text"
          name="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>
          Age of Child:
          <input
            className="form-i"
            type="text"
            name="Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <label>
          Branch Name:
          <input
            className="form-i"
            type="text"
            name="Branch"
            value={branch}
            onChange={(event) => setBranch(event.target.value)}
          />
        </label>
        <label>
          Current Group:
          <input
            className="form-i"
            type="text"
            name="Group"
            value={group}
            onChange={(event) => setGroup(event.target.value)}
          />
        </label>
        ​
        <hr />​
        <Button
          className="button"
          type="submit"
          onClick={() => {
            setShowForm(false);
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  ) : (
    <Button
      className="button"
      onClick={() => {
        setShowForm(true);
      }}
    >
      Add New Child
    </Button>
  );
}
